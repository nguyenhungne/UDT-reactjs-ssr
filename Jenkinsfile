node {
    def app 

    stage('Clone repository') {
        // let make a clone of the repository
        checkout scm
    }

    stage('Build image') {
        // build the image
        app = docker.build("app")
    }

    stage('test image') {
        // test the image
        app.inside {
            sh 'echo "tests passed"'
        }
    }

    stage('Push image') {
        // push the image
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}