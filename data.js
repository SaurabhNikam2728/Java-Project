var arr=[{pid:1,pname:"biscuits",qty:50,price:3000},{pid:2,pname:"Eggs",qty:400,price:1400},{pid:3,pname:"Rice",qty:60,price:6000}];
// alert("i am sauabh");

function addProduct(a=arr)
{
    
    var pid=parseInt(document.getElementById("pid").value);
    var pname=document.getElementById("pname").value;
    var qty=parseInt(document.getElementById("qty").value);
    var price=parseFloat(document.getElementById("price").value);
    if(pid==="" || pname==="" || qty==="")
    {
        alert("You did'nt enter any value ");
    }
    else
    {
        arr.push({pid:pid,pname:pname,qty:qty,price:price});
    }
    clearData();
    showProducts();
    
}

let clearData=()=>
{
    document.getElementById("pid").value="";
    document.getElementById("pname").value="";
    document.getElementById("qty").value="";
    document.getElementById("price").value="";
}

function updateProduct()
{
    // alert();
    var pd=parseInt(document.getElementById("pid").value);
    arr.splice(pd-1,1);
    var pid=parseInt(document.getElementById("pid").value);
    var data;
    // for(var prdt of arr)
    // {
    //     if(prdt.pid==pid)
    //     {
            // data=prdt;
            // document.getElementById("pid").value=data.pid;
            // document.getElementById("pname").value=data.pname;
            // document.getElementById("qty").value=data.qty;
            // document.getElementById("price").value=data.price;
    //     }
    // }
    var pid=parseInt(document.getElementById("pid").value);
    var pname=document.getElementById("pname").value;
    var qty=parseInt(document.getElementById("qty").value);
    var price=parseFloat(document.getElementById("price").value);
    // data.pname=document.getElementById("pname").value;
    // data.qty=parseInt(document.getElementById("qty").value);
    // data.price=parseFloat(document.getElementById("price").value);
    addProduct();
}

function showProducts()
{
    document.getElementById("cart").innerHTML="";
    var str=` <table border="solid">
    <thead>
        <tr>
            <th>Product ID </th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
        </tr>
    </thead>
    <tbody>
            `;
    for(var product of arr)
    {
        str+=`<tr><td>${product.pid}</td><td>${product.pname}</td><td>${product.qty}</td><td>${product.price}</td>
        <td><input type="button" class="btn btn-success" name="btn" id="update" onclick="updateProduct()" value="Update Product"></td>
        <td><input type="button" class="btn btn-success" name="btn" id="update" onclick="deleteProduct()" value="Delete Product"></td>
        </tr>`
    }
    str+=`</tbody></table>`;
    document.getElementById("cart").innerHTML+=str;
}

function searchProduct()
{
    
    var product=document.getElementById("search").value;
    var arr2=arr.filter(a => a.pname.includes(product));
    showProducts(arr2);
}

function removeProduct(){
    var pid=parseInt(document.getElementById("pid").value)
    var pos=arr.findIndex(a=>a.pid===pid)
    if(pos!=-1){
        var ans=confirm(`${pid} do you want to delete(y/n)`)
        if(ans){
           arr.splice(pos,1)
        }
        displaytable()
    }else{
        alert("not found")
    }
    displaytable();
    clearData();
    
 }
 

 function displaytable(a=arr){
    str="<table border='2'><tr><th>Product id</th><th>Product name</th><th>Product qty</th><th>product price</th><th>display</th></tr>";
    for( var ob of arr){
        //str+="<tr><td>"+ob.pid+"</td><td>"+ob.pname+"</td><td>"+ob.qty+"</td><td>"+ob.price+"</td></tr>"
        str+=`<tr><td>${ob.pid}</td><td>${ob.pname}</td><td>${ob.qty}</td><td>${ob.price}</td><td><button type='button' name='btn' id='btn' value='btn' onclick='displaydata(${ob.pid})'>display data</button></td></tr> `

    }
    str+="</table>"
    document.getElementById("cart").innerHTML=str;

}

function onDelete()
{
    alert();

    var flag=arr.findIndex(a=>a.pid==pid);

}



