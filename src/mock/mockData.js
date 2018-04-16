import Mock from "mockjs";
let Random = Mock.Random;


//用户登陆信息
let wareInfo = Mock.mock({
    data: {
      responseCode: 200,
      responseMessage: 'success',
      'userMessage|20': [{
        'id|+1': 1,
        'name|1': ['台式机','笔记本','打印机','照相机'],
        'departname|1': ['刑一庭','民一庭','政治部','办公室'],
        buyData:()=>Random.datetime('yyyy-MM-dd'),
        username: ()=>Random.cname()
      }]
    }
  })
  
  
  
  let mockData = {
    wareInfo: wareInfo
  }
  
  export default mockData;
  
  