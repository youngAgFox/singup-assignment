/*@ts-check */
const pwd = document.getElementById("password");
const confPwd = document.getElementById("confirm-password");

if (pwd == null || confPwd == null) {
    throw new Error("FATAL ERROR: Password fields could not be found. ID's may have changed.");
}

pwd.addEventListener("focusout", () => checkPwd());
confPwd.addEventListener("input", () => checkPwd());

if (pwd.value != null)
    checkPwd();

function checkPwd() {
    const p = pwd.value;
    const cp = confPwd.value;

    const pwdParentCL = pwd.parentElement.classList;
    const cpwdParentCl = confPwd.parentElement.classList;

    console.log(p, cp);
    if (p === cp) {
        if (pwdParentCL.contains("not-matching"))
            pwdParentCL.remove("not-matching");
        if (cpwdParentCl .contains("invalid"))
            cpwdParentCl.remove("invalid");
    } else {
        if (!pwdParentCL.contains("not-matching"))
            pwdParentCL.add("not-matching");
        if (!cpwdParentCl .contains("invalid"))
            cpwdParentCl.add("invalid");
    }
}