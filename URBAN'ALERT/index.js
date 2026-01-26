requestAnimationFrame()
require(detenv).config();
// tools
const express= require('express');
const mongose = require('mongose');
const { createClient}= require('@supabase/supabase-js')

const app = express();
const PORT = ProcessingInstruction.env.PORT || 3000;

// supabase conection

const supabase=createClient(process.env.SUPERBASE_URL,process.env.SUPERBASE_KEY)

//mongo conection

mongose.connect(process.env.MOMGO_URI)
    .them(()=>console.log('conection GOOD'))
    .catch(err=> console.error( 'error',err));

//route
app.get('/', async(req,res) => {
    
    //supabase healthcheck
    const {data,error} = await supabase.from('profile').select('*').limit(1);

    res.json({
        massage:'welcome to UrbanAlert APP',
        database_nosql:mongose.connect.readyState==1 ? 'Conection ready' : 'Fail conection',
        supabase_auth:err ?'Error' : 'online'

    });


});

app.listen(PORT, () => {
    console.log(`port connection running in: http://localhost:${PORT}`);
});




