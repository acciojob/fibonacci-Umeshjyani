function fibonacci(num) {
	let a=0;
	let b=1;
	if(num==1)
		return a;
	if(num==2)
		return b;
	for(let i=2;i<num;i++){
		let temp=a+b;
		a=b;
		b=temp;
	}
	return b;
}

module.exports = fibonacci;
