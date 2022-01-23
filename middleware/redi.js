
const { createClient } =  require('redis')

const clientObj = createClient({
    url: 'redis://default:wasalt@1234@192.168.101.7:6379'
  });

 const Exec = async  () => {
  clientObj.on('error', (err) => console.log('Redis Client Error', err));
  await clientObj.connect();
//   await client.set('name', 'kunal');
//   const value = await client.get('name');
//   console.log(value)
}

Exec()

module.exports = clientObj
