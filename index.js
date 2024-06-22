const saveTweets=async()=>{
    try{
        const response=await fetch(
            "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
            {
                headers:{
                    "Content-Type":"application/json",
                },
                method:"POST",
                body:JSON.stringify({
                    tweetImage:"random image",
                    tweetDescription:"ranon desc",
                }),
            } );
        if(response.ok){
            console.log("Yes you communicated with Server");
            const res = await response.json();
            console.log(res);
        }

    }catch(err){
            console.log(err);
    }
};


  saveTweets();
  <button onclick="saveTweets()">register</button>
