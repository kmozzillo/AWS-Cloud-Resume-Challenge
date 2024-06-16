# Cloud Resume Project - AWS
This is my repository for the cloud resume project by Forrest Brazeal: https://cloudresumechallenge.dev/docs/the-challenge/aws/ 

I host my website on AWS using:
* S3 Static Website
* Amazon CloudFront
* Amazon Route 53
* Amazon DynamoDB
* AWS Lambda
* Boto3
* GitHub Actions

Big thanks to Rishab in Cloud for making his Cloud Resume Challenge playlist on Youtube: https://www.youtube.com/watch?v=NNKzYhvqq5w&list=PLK_LRl1CH4L_ko1-Xm04ATPTduu6gaSM8
This was very helpful for me when I got stuck, particular with configuring permissions and the Lambda function

## Step 1: AWS Certified Cloud Practicioner
The first step in the challenge is to pass the [AWS Certified Cloud Practicioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) exam. 
It took me around 2 weeks to study and prepare for the exam

For study material I used:
* AWS's free [cloud practicioner essentials course](https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials)
* [Practice exams](https://www.udemy.com/course/aws-certified-cloud-practitioner-practice-test/) from Mohamed Ali on Udemy

## Step 2: HTML, CSS, and Javascript

## Step 3: Creating an S3 Static Website on AWS
I mainly followed these guides for setting up my static website using S3:
* https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
* https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html
The installation was easy and straightforward. The only issue I encountered was setting up the proper permissions and integrating it with CloudFront

## Step 4: Setting up CloudFront, DNS, and HTTPS
I mainly used this guide to configure CloudFront for my website: https://repost.aws/knowledge-center/cloudfront-serve-static-website
First, I had to register a domain name using AWS Route 53: kmozzillo-cloudresume.com 
After I obtained a domain name, I used AWS CloudFront to create a custom SSL certificate for *.kmozzillo-cloudresume.com
I had to apply the proper policy within my S3 bucket to give CloudFront access to retrieve the contents of the S3 bucket
