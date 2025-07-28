terraform {
  backend "s3" {
    bucket = "terraform-state-calamari"
    region = "us-west-2"
    key = "resume-site"
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "resume_site" {
  bucket = "${var.app_name}-hannah"
}

data "aws_acm_certificate" "resume_site" {
  domain = var.domain_name
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "resume_site" {
  price_class     = "PriceClass_100"
  aliases         = [var.domain_name]
  enabled         = true
  is_ipv6_enabled = true

  origin {
    domain_name              = aws_s3_bucket.resume_site.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.resume_site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.resume_site.id
  }

  custom_error_response {
    error_code            = 403
    response_code         = 403
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.resume_site.bucket_regional_domain_name
    cache_policy_id        = data.aws_cloudfront_cache_policy.managed_caching_optimized.id
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.resume_site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

# S3 Bucket Policy
resource "aws_s3_bucket_policy" "allow_cloudfront_only" {
  bucket = aws_s3_bucket.resume_site.id
  policy = jsonencode({
    Version = "2008-10-17"
    Id      = "PolicyForCloudFrontPrivateContent"
    Statement = [
      {
        Sid = "AllowCloudFrontServicePrincipal"
        Principal = {
          "Service" = ["cloudfront.amazonaws.com"]
        }
        Action   = "s3:GetObject"
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.resume_site.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.resume_site.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_origin_access_control" "resume_site" {
  name                              = aws_s3_bucket.resume_site.bucket_regional_domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
