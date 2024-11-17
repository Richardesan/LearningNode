const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if (err) {
        console.log('Error reading file', err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result)=>{ 
        if (err) {
            console.log('Error reading file', err)
            return
        }
        const second = result
        writeFile('./content/result.sync.txt', `Here is the reuslt: ${first}, ${second}`, (err, result)=>{
            if (err) {
                console.log('Error writing file', err)
                return
            }
            console.log('done with this task', result)
        })
    }
  
    )
})

console.log('starting next task...')