const fs=require('fs');
const os=require('os');


// const message= `platform ${os.platform}
//                 Architecture : ${os.arch}
//                 Total Memory : ${os.totalmem() /1024/1024/1024} GB`;


// fs.writeFile("systemInfo.txt",message,(err)=>{
//     if(err){
//         console.log("File not created");
//         return;
        
//     }                                                                                                       
//     console.log("File created successfully")
    
// })
// fs.readFileSync("systemInfo.txt",message,(err)=>{
//     if(err){
//         console.log("File not created");
//         return;
        
//     }
//     console.log("File created successfully");
    
    
// })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              




setInterval(()=>{
    const freeman =os.freemem()/1024/1024/1024;
    const log =`freeMemory: ${os.freemem}Gb\n`;
     fs.appendFileSync("systemInfo.txt",log);
},3000);