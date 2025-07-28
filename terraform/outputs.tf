output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.resume_site.id
}

output "bucket_name" {
  value = aws_s3_bucket.resume_site.id
}