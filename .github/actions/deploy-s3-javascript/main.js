const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', { requeried: true });
    const bucketRegion = core.getInput('bucket-region', { requeried: true });
    const distFolder = core.getInput('dist-folder', { requeried: true });

    // github would give action to the oktokit(github.getOctokit().) client that's in the end is a tool provided by github action that makes easy 
    //to send request to github rest api.

    //it also can give you access to a context that gives you access to values of the github context object
    //like: name of the action that is executing and the couple of other value as well.
    // github

    // 2) Upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`) //synchronize the local folder to an s3 bucket


    core.notice('Hello from my custom JavaScript Action!');
}
run();