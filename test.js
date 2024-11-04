function fakeGetData(url, callback) {
  const fakeResponse = {
    "http://api/1.com": "data1",
    "http://api/2.com": "data2",
    "http://api/3.com": "data3",
  };

  const randomMilisecond = Math.floor(Math.random() * 5000) + 1000;

  console.log(
    "đang gọi API với url" + url + " ",
    fakeResponse[url],
    randomMilisecond,
  );

  setTimeout(() => {
    callback(fakeResponse[url]);
  }, randomMilisecond);
}

// function startAPIs(url) {
//   let res = null;
//   let _callback = null;

//   fakeGetData(url, (data) => {
//     if (_callback) {
//       _callback(data);
//     } else {
//       res = data;
//     }
//   });

//   return function getData(callback) {
//     if (!res) {
//       _callback = callback;
//     } else {
//       callback(res);
//     }
//   };
// }

// const api1 = startAPIs('http://api/1.com');
// const api2 = startAPIs('http://api/2.com');
// const api3 = startAPIs('http://api/3.com');

// api1((res1) => {
//   console.log('res1', res1);
//   api2((res2) => {
//     console.log('res2', res2);
//     api3((res3) => {
//       console.log('res2', res3);
//     });
//   });
// });

// console.log(
//   fakeGetData('http://api/1.com', (res1) => {
//     fakeGetData('http://api/2.com', (res2) => {
//       fakeGetData('http://api/3.com', (res3) => {
//         console.log('res1', res1);
//         console.log('res2', res2);
//         console.log('res3', res3);
//       });
//     });
//   })
// );

function _fetch(url) {
  let res = null;
  let _cb = null;

  fakeGetData(url, (data) => {
    if (_cb) {
      _cb(data);
    } else {
      res = data;
    }
  });

  function then(callback) {
    if (!res) {
      _cb = callback;
    } else {
      callback(res);
    }
  }
  return {
    then,
  };
}

const res1 = _fetch("http://api/1.com");

const result = res1.then((data1) => {
  console.log("data1 >>>>>>>>", data1);
});
