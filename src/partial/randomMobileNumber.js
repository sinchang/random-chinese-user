export default function () {
  const arr = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];

  var randomMobileNumber = arr[parseInt(10 * Math.random())];

  for (let i = 0; i < 8; i++) {
    randomMobileNumber += Math.floor(Math.random() * 10);
  }
  return randomMobileNumber;
};
