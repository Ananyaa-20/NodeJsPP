const express =  require('express')
const app = express();
app.use(express.json());

app.get('/add',(req,res)=>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if(isNaN(num1) || isNaN(num2)){
        console.log("not a valid input");
        res.send({error: "Please Provide valid input"});
        return
    }
    const sum = num1+num2;
    console.log(sum);
    res.send({sum});

})
app.get('/Subt',(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if(isNaN(a) || isNaN(b)){
        console.log("not a valid input");
        res.send({error: "Please Provide valid input"});
        return;
    }
    const subt = a-b;
    console.log(subt);
    res.send({subt});
})
app.get('/divide',(req,res)=>{
    const nu1 = req.query.nu1;
    const nu2 = req.query.nu2;
    if(isNaN(nu1) || isNaN(nu2)){
        console.log("not a valid input");
        res.send({error: "Please Provide valid input"});
        return
    }
    const divide = nu1/nu2;
    res.send({divide});

})
app.get('/addList',(req,res)=>{
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
    }
    res.send({sum});
})
app.get('/MulList',(req,res)=>{
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers);
    let mul = 1;
    for(let i = 0; i < numbers.length; i++){
        mul *= Number(numbers[i]);
    }
    res.send({mul});
})

app.listen(3003,() => {
    console.log("server is running in port 3003");
})
