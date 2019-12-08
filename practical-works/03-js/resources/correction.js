/* ~~~~ Constants ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const headers = ["Nom", "Population", "Surface", "Département", "Région"];
const keys = ["nom", "population", "surface", "codeDepartement", "codeRegion"];
const types = ["string", "number", "number", "string", "string"];
/* ~~~~ Helpers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getSearchParams = (form) => {
	const formData = new FormData(form);
	const searchParams = new URLSearchParams(formData);
	return searchParams;
};
const getLocalURL = (searchParams) => {
	const localURL = new URL(location);
	localURL.hash = "";
	localURL.search = searchParams;
	return localURL;
};
const getRemoteURL = (searchParams) => {
	const remoteURL = new URL("https://geo.api.gouv.fr/communes");
	remoteURL.search = searchParams;
	return remoteURL;
};
/* ~~~~ Initialization ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const initForm = () => {
	const form = document.querySelector("header > form");
	const currentURL = new URL(location);
	const currentSearchParams = currentURL.searchParams;
	if (currentSearchParams.has("nom")) {
		const input = computeInput(currentSearchParams);
		renderField(form, input);
	}
	return form;
};
const initTable = () => {
	const main = document.querySelector("main");
	const table = document.createElement("table");
	main.append(table);
	table.createCaption();
	const head = table.createTHead();
	const row = head.insertRow();
	for (const header of headers) {
		const cell = document.createElement("th");
		row.append(cell);
		cell.textContent = header;
		cell.tabIndex = 0;
	}
	table.createTBody();
	return table;
};
/* ~~~~ State computing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const computeState = async (searchParams) => {
	const input = computeInput(searchParams);
	const output = await computeOutput(searchParams);
	return {
		input: input,
		output: output,
	};
};
const computeInput = (searchParams) => {
	const input = searchParams.get("nom");
	return input;
};
const computeOutput = async (searchParams) => {
	const remoteURL = getRemoteURL(searchParams);
	const response = await fetch(remoteURL);
	const output = await response.json();
	return output;
};
/* ~~~~ State rendering ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const renderState = (form, table, state) => {
	const input = state.input;
	const output = state.output;
	renderForm(form, input);
	renderTable(table, input, output);
};
const renderForm = (form, input) => {
	renderField(form, input);
};
const renderTable = (table, input, output) => {
	renderCaption(table, input, output);
	renderBody(table, output);
};
const renderField = (form, input) => {
	const elements = form.elements;
	const name = elements.namedItem("nom");
	name.value = input;
};
const renderCaption = (table, input, output) => {
	const caption = table.caption;
	const length = output.length;
	const content = length === 0
		? "Aucun résultat pour la recherche «\u{00a0}" + input + "\u{00a0}»"
		: length === 1
		? "1 résultat pour la recherche «\u{00a0}" + input + "\u{00a0}»"
		: String(length) + " résultats pour la recherche «\u{00a0}" + input + "\u{00a0}»";
	caption.textContent = content;
};
const renderBody = (table, output) => {
	const bodies = table.tBodies;
	const oldBody = bodies.item(0);
	const newBody = document.createElement("tbody");
	for (const item of output) {
		const row = newBody.insertRow();
		for (const key of keys) {
			const cell = row.insertCell();
			const content = item[key];
			cell.textContent = content;
		}
	};
	oldBody.replaceWith(newBody);
};
/* ~~~~ State logging ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const logState = (state) => {
	const input = state.input;
	const output = state.output;
	console.groupCollapsed(JSON.stringify(input) + ":");
	console.table(output, ["nom", "codeDepartement", "codeRegion"]);
	console.groupEnd();
};
/* ~~~~ State sorting ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const sortState = (state, column) => {
	let order = 1;
	if (column < 0) {
		column = ~column;
		order = -1;
	}
	const output = state.output;
	const key = keys[column];
	const type = types[column];
	switch (type) {
		case "number": {
			output.sort((a, b) => {
				return (a[key] - b[key]) * order;
			});
			break;
		}
		case "string": {
			output.sort((a, b) => {
				return a[key].localeCompare(b[key], "fr") * order;
			});
			break;
		}
	}
};
export {getSearchParams, getLocalURL, getRemoteURL, initForm, initTable, computeState, renderState, logState, sortState};
