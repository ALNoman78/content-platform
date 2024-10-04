// const isVerified = '';

// // if (isVerified === true) {
// //     console.log('True');
// // }else{
// //     console.log('False');
// // }

// console.log(`${isVerified === true ?  'true' : 'false'}`);


function getTime (time){
    const hours = parseInt(time / 3600);
    let remainingSecond = hours % 3600
    const minutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60

    return `${hours} hours ${minutes} minutes ${remainingSecond} seconds`
}
getTime(4534)