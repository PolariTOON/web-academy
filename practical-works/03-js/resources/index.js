/* ~~~~ Constants ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const headers = ["Nom", "Population", "Surface", "Département", "Région"];
const keys = ["nom", "population", "surface", "codeDepartement", "codeRegion"];
const types = ["string", "number", "number", "string", "string"];
/* ~~~~ Helpers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getSearchParams = (form) => {
    /* TODO */
};
const getLocalURL = (searchParams) => {
    /* TODO */
};
const getRemoteURL = (searchParams) => {
    /* TODO */
};
/* ~~~~ Initialization ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const initForm = () => {
    /* TODO */
};
const initTable = () => {
    /* TODO */
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
    /* TODO */
};
const computeOutput = async (searchParams) => {
    /* TODO */
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
    /* TODO */
};
const renderCaption = (table, input, output) => {
    /* TODO */
};
const renderBody = (table, output) => {
    /* TODO */
};
/* ~~~~ State logging ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const logState = (state) => {
    /* TODO */
};
/* ~~~~ State sorting ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const sortState = (state, column) => {
    /* TODO */
};
export {getSearchParams, getLocalURL, getRemoteURL, initForm, initTable, computeState, renderState, logState, sortState};
