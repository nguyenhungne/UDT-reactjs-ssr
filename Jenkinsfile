node {
    def app 

    stage('Clone repository') {
        // Clone the repository
        checkout scm
    }

    stage('Build image') {
        // Build the image
        app = docker.build("app")
    }

    stage('Test image') {
        // Test the image
        app.inside {
            sh 'echo "tests passed"'
        }
    }

    stage('Push image') {
        // Push the image to Docker Hub
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Cleanup') {
        // Cleanup images to save space
        sh 'docker rmi app:${env.BUILD_NUMBER} || true'
        sh 'docker rmi app:latest || true'
    }
}
