const express=require("express");
const Config=require("./db/Config");
const Student=require("./db/Student");
const Teacher=require("./db/Teacher");
const Chem=require("./db/Chem");
const Math=require("./db/Mathf")
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

app.post("/teacher", async (req,resp)=>{
    let teacher= new Teacher(req.body)
    let result= await teacher.save()
    resp.send(result);
});
app.post("/student", async (req,resp)=>{
    let student= new Student(req.body)  
    let result = await student.save();
    resp.send(result);
});

app.post("/logteacher", async(req, resp)=>{
    if(req.body.id && req.body.tpassword){
        let teacher= await Teacher.findOne(req.body).select("-tpassword");
        if(teacher){
            resp.send(teacher);
        }else{
            resp.send("Data Not Found")
        }
    }else{
        resp.send("Data Not Match")
    }
});

app.post("/logstudent",async (req, resp)=>{
    if(req.body.roll && req.body.spassword){
        let student= await Student.findOne(req.body).select("-spassword");
        if(student){
            resp.send(student)
        }else{
            resp.send("Data not found");
        }
    }else{
        resp.send("Data not match");
    }
}); 
app.get("/studentList", async(req, resp)=>{
    let attendancelist= await Student.find().sort({sname:1});
    if(attendancelist.length>0){
        resp.send(attendancelist);
    }else{
        resp.send({result:"No Student Found"});
    }

    
});
 
// *************subjects******


app.post("/chems", async(req, resp)=>{
    let csechem= new Chem(req.body);
    let result= await csechem.save();
    resp.send(result)
});

app.post("/mathfs", async(req, resp)=>{
    let math= new Math(req.body);
    let result= await math.save();
    resp.send(result)
});
app.get("/chemList", async(req, resp)=>{
    let chemlist= await Chem.find().sort({chname:1});
    if(chemlist.length>0){
        resp.send(chemlist);
    }else{
        resp.send({result:"No Student Found"});
    }

});

app.get("/prechemlist/:id", async(req, resp)=>{
    let prechemlist= await Chem.findOne({_id:req.params.id});
    if(prechemlist)
    {
        resp.send(prechemlist);

    }else{
        resp.send("Data Not Found")
    } 
})

app.put("/chemlistup/:id", async(req, resp)=>{
    let chemlistup=await Chem.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(chemlistup)
});
app.delete("/chemlistdel/:id",  async(req, resp)=>{
    let result= await Chem.deleteOne({id:req.params.body});
    resp.send(result);

});
 app.get("/chemlistsear:key", async(req, resp)=>{
    let result= await Chem.find({
        "$or":[
            {chroll:{$regex:req.params.key}},
            {chmse:{$regex:req.params.key}},
            // {category:{$regex:req.params.key}},
            // {company:{$regex:req.params.key}}
        ]
    });
    resp.send(result);
})

 app.get("/searching/:key", async(req, resp)=>{
    let result= await Student.find({
        "$or":[
            {sname:{$regex:req.params.key}}
        ]
    });
    resp.send(result);
});
app.get("/chsear/:key", async(req, resp)=>{
    let result= await Chem.find({
        "$or":[
            {chname:{$regex:req.params.key}}
        ]
    });
    resp.send(result);
});

app.listen(4500);



