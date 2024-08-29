import * as cdk from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class HelloWorldLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Lambda function
    const helloWorldLambda = new Function(this, "HelloWorldLambda", {
      runtime: Runtime.PYTHON_3_10,
      handler: "index.handler",
      code: Code.fromAsset("lambda"),
      functionName: "demo-lambda",
      timeout: cdk.Duration.minutes(1),
    });

    new cdk.CfnOutput(this, "LambdaFunctionArn", {
      value: helloWorldLambda.functionArn,
      description: "ARN of hello world lambda function",
    });
  }
}
