import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Share,
  Platform,
} from 'react-native'
//import Share from 'react-native-share'

// // export default class App extends Component {
// //   constructor (props) {
// //     super(props)
// //     this.state = {}
// //   }

// //   myCustomeShare = async () => {
// //     const shareOption = {
// //       message: 'This is a test message',
// //     }
// //     try {
// //       const ShareResponse = await Share.open(shareOption)
// //     } catch (error) {
// //       console.log('Error =>', error)
// //     }
// //   }

// //   render () {
// //     return (
// //       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //         <TouchableOpacity onPress={() => this.myCustomeShare()}>
// //           <Text style={{fontSize: 30}}> App </Text>
// //         </TouchableOpacity>
// //       </View>
// //     )
// //   }
// // }

export default App = () => {
  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          title: 'App link',
          message:
            'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
          url:
            'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        },
        {
          excludedActivityTypes: [
            'com.apple.UIKit.activity.Print',
            'com.apple.UIKit.activity.Message',
            'com.apple.UIKit.activity.CopyToPasteboard',
            'com.apple.UIKit.activity.AssignToContact',
            'com.apple.UIKit.activity.SaveToCameraRoll',
            'com.apple.UIKit.activity.AddToReadingList',
            'com.apple.UIKit.activity.PostToFlickr',
            'com.apple.UIKit.activity.PostToVimeo',
            'com.apple.UIKit.activity.PostToTencentWeibo',
            'com.apple.UIKit.activity.AirDrop',
            'com.apple.UIKit.activity.OpenInIBooks',
            'com.apple.UIKit.activity.MarkupAsPDF',
            'com.apple.reminders.RemindersEditorExtension',
            'com.apple.mobilenotes.SharingExtension',
            'com.apple.mobileslideshow.StreamShareService',
            'com.linkedin.LinkedIn.ShareExtension',
            'pinterest.ShareExtension',
            'com.google.GooglePlus.ShareExtension',
            'com.tumblr.tumblr.Share-With-Tumblr',
            'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
            'com.apple.UIKit.activity.PostToFacebook', //FaceBook
            'com.apple.UIKit.activity.PostToTwitter', //Twitter
          ],
        },
      )
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={onShare}
        style={{
          backgroundColor: '#ff5f2e',
          height: 50,
          width: 100,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
        }}>
        <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
          Share
        </Text>
      </TouchableOpacity>
    </View>
  )
}

// import React, {Component} from 'react'
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   Linking,
//   TouchableOpacity,
//   Platform,
// } from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// export default class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       mobileNo: '9726009509',
//       message: '',
//     }
//   }
//   openWhatsApp = () => {
//     let msg = this.state.message
//     let mobile = this.state.mobileNo
//     if (mobile) {
//       if (msg) {
//         let url =
//           'whatsapp://send?text=' +
//           this.state.message +
//           '&phone=91' +
//           this.state.mobileNo
//         Linking.openURL(url)
//           .then(data => {
//             console.log('WhatsApp Opened successfully ' + data)
//           })
//           .catch(() => {
//             alert('Make sure WhatsApp installed on your device')
//           })
//       } else {
//         alert('Please enter message to send')
//       }
//     } else {
//       alert('Please enter mobile no')
//     }
//   }
//   render () {
//     return (
//       <View style={styles.container}>
//         <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
//           Open WhatsApp chat box from React-native App
//         </Text>

//         <TextInput
//           value={this.state.message}
//           onChangeText={message => this.setState({message})}
//           placeholder={'Enter message'}
//           multiline={true}
//           style={[styles.input, {height: 90}]}
//         />

//         <TextInput
//           value={this.state.mobileNo}
//           onChangeText={mobileNo => this.setState({mobileNo})}
//           placeholder={'Enter Mobile'}
//           style={styles.input}
//           keyboardType={'numeric'}
//         />
//         <View style={{marginTop: 20}}>
//           <TouchableOpacity onPress={this.openWhatsApp}>
//             <View
//               style={{
//                 backgroundColor: '#3ac569',
//                 height: 60,
//                 width: 60,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderRadius: 10,
//               }}>
//               <Text>
//                 <FontAwesome name='whatsapp' size={50} color={'#fff'} />
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 30,
//     backgroundColor: '#ffffff',
//   },
//   input: {
//     width: 255,
//     height: 44,
//     padding: 10,
//     margin: 10,
//     backgroundColor: '#FFF',
//     borderColor: '#000',
//     borderRadius: 0.5,
//     borderWidth: 0.5,
//   },
// })
