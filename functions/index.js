const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config.firebase)



const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then((doc) => {
            console.log('notification added', doc)
        })
}  

exports.onCreateProject = functions.firestore
    .document('projects/{project}')
    .onCreate((snap, context) => {

        const project = snap.data();
        const notification = {
            content: `Added a new challenge: ${project.title}`,
            user: `${project.authorFirstName} ${project.authorLastName}`,
            projectTitle: project.title,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)


    });
    
exports.onCreateUser = functions.auth.user()
    .onCreate((user) => {
        return admin.firestore().collection('users').doc(user.uid).get()
            .then((doc) => {
                const newUser = doc.data()
                const notification = {
                    content: "Joined the Party",
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()

                }
                return createNotification(notification)
        })
    });
    