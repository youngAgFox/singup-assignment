/*@ts-check */
const pwd = document.getElementById("password");
const confPwd = document.getElementById("confirm-password");

if (pwd == null || confPwd == null) {
    throw new Error("FATAL ERROR: Password fields could not be found. ID's may have changed.");
}

pwd.addEventListener("focusout", () => checkPwd());
confPwd.addEventListener("focusout", () => checkPwd());

function checkPwd() {
    const p = pwd.value;
    const cp = confPwd.value;

    const pwdParentCL = pwd.parentElement.classList;

    console.log(p, cp);
    if (p === cp && p !== "") {
        if (pwdParentCL.contains("not-matching"))
            pwdParentCL.remove("not-matching");
    } else {
        if (!pwdParentCL.contains("not-matching"))
            pwdParentCL.add("not-matching");
    }
}