pipeline {
    agent any

    stages {
      
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                 bat 'npm install' // Install dependencies again before running tests
                bat 'npm test'
            }
        }
stage('Run Tests') {
    steps {
        script {
            def testResult = bat(script: 'npm test -- --passWithNoTests 2>&1', returnStatus: true)
            if (testResult != 0) {
                currentBuild.result = 'FAILURE'
            }
        }
    }
}

    }

    post {
        always {
            script {
                def projectName = 'React_JS Calculator'
                def buildNumber = currentBuild.number
                def buildStatus = currentBuild.result ?: 'UNKNOWN'

                def emailBody = """$projectName - Build # $buildNumber - $buildStatus:

Check console output at ${env.BUILD_URL} to view the results.

Note: This is an auto-generated email. Do not reply to this email.

Thanks,
Jenkins
"""

                emailext (
                    body: emailBody,
                    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                    subject: "$projectName - Build # $buildNumber - $buildStatus"
                )
            }
        }
    }
}
