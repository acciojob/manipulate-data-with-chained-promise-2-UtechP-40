//your JS code here. If required.
let arr = [1,2,3,4]
let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(arr.filter((x) => {
            if(x%2==0){
                return x
            }
        }))
    }, 1000)
})
p1.then((res)=>{
    // console.log(res)
	document.write(res)
    let y = res;
    let p2 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(y.map((x) => {
                return x*2
            }))
        }, 3000)
    })

    p2.then((res)=>{
		// document.innerText = res
        document.querySelector("body").innerText=""
        document.write(res)
        // console.log(res)
    })
    .catch(()=>{
        console.log("Error in Promise 2")
    })
})
.catch(()=>{
    console.log("Promise rejected")
})