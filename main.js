const buttons = [{
		value: "1",
		cols: 3,
	},
	{
		value: "2",
		cols: 1,
	},
	{
		value: "3",
		cols: 1,
	},
	{
		value: "4",
		cols: 1,
	},
	{
		value: "5",
		cols: 1,
	},
	{
		value: "6",
		cols: 1,
	},
	{
		value: "7",
		cols: 1,
	},
	{
		value: "8",
		cols: 1,
	},
	{
		value: "9",
		cols: 1,
	},
	{
		value: "*",
		cols: 1,
	},
	{
		value: "0",
		cols: 1,
	},
	{
		value: "#",
		cols: 1,
	},
	{
		value: "SMS",
		cols: 1,
	},
	{
		value: "CALL",
		cols: 1,
	},
	{
		value: "CLEAR",
		cols: 2,
	},
];

state = {
	current: "",
};

let contacts = [];

let inputVal = (symbol) => {
	if (symbol === "CLEAR") {
		clear();
	} else {
		state.current += symbol;
		document.getElementById("number").value = state.current;
	}
};

let btn = document.querySelector(".btn-part");

buttons.forEach((btns) => {
	btn.innerHTML += `<button id="${btns.value.toLowerCase()}" class="add-panel__keys-${
		btns.cols
	}" type="button" cols="${btns.cols}" onclick=inputVal('${btns.value}')>${
		btns.value
	}</button>`;
});

let clear = () => {
	document.getElementById("clear").addEventListener("click", function () {
		document.getElementById("name").value = "";
		document.getElementById("number").value = "";
		document.getElementById("email").value = "";
	});
};

let addContact = () => {
	let name = document.getElementById("name").value;
	let number = document.getElementById("number").value;
	let email = document.getElementById("email").value;

	return name.length === 0 ?
		console.log("Empty") :
		number.length === 0 ?
		console.log("Empty") :
		email.length === 0 ?
		console.log("Empty") :
		push(name,number,email);
};

let push = (name,number,email) => {

	contacts.push({
		name,
		number,
		email,
	});

	document.querySelector(".view-panel").innerHTML += `<ul class="contact-list">
									<li>
										<p>Name: ${name} </p>
										<p>Number: ${number}</p>
										<p>Email: ${email}</p>
									</li>
									</ul>`;

};
