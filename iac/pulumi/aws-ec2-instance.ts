import * as aws from "@pulumi/aws";

const server = new aws.ec2.Instance("web-server", {
    instanceType: "t2.micro",
    ami: "ami-0c02fb55956c7d316", 
    tags: { Name: "WebServer" },
});
