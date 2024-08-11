const switchForm = {
	switchValue1: 0,
	switchValue2: 1,
}
//根据元素Id和switch开关值初始化组件
function initSwitch(switchId, onOrOffValue) {
	var e = document.getElementById(switchId)
	var switchOn = e.children[1]
	var switchOff = e.children[3]
	if (onOrOffValue == 1) {
		switchOff.className += " is-active"
		e.className += " is-checked"
		if (switchOn.className.indexOf('is-active') != -1) {
			var classNameLen = switchOn.className.length
			switchOn.className = switchOn.className.substring(0, classNameLen - 10)
		}
		e.setAttribute('value', 1)
	} else {
		switchOn.className += " is-active"
		if (switchOff.className.indexOf('is-active') != -1) {
			var classNameLen = switchOff.className.length
			switchOff.className = switchOff.className.substring(0, classNameLen - 10)
		}
		if (e.className.indexOf('is-checked') != -1) {
			var classNameLen = e.className.length
			e.className = e.className.substring(0, classNameLen - 11)
		}
		e.setAttribute('value', 0)
	}
}

//初始化第一个switch开关
initSwitch("switch-body1", switchForm.switchValue1)
//初始化第二个switch开关
initSwitch("switch-body2", switchForm.switchValue1)
//初始化第三个switch开关
initSwitch("switch-body3", switchForm.switchValue1)
//初始化第四个switch开关
initSwitch("switch-body4", switchForm.switchValue1)

//第一个switch开关绑定鼠标点击事件
document.getElementById("switch-body1").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body1').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第二个switch开关绑定鼠标点击事件
document.getElementById("switch-body2").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body2').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第三个switch开关绑定鼠标点击事件
document.getElementById("switch-body3").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body3').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第四个switch开关绑定鼠标点击事件
document.getElementById("switch-body4").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body4').getAttribute('value')
	console.log(switchForm.switchValue1)
}



function switchClick(e) {
    var switchOn = e.parentNode.children[1];
    var switchOff = e.parentNode.children[3];
    var switchBody = e.parentNode;

    // 检查当前开关是否处于打开状态
    var isActive = switchBody.className.indexOf('is-checked') !== -1;

    if (isActive) {
        // 如果开关是打开的，关闭它
        switchOn.classList.remove('is-active');
        switchOff.classList.add('is-active');
        switchBody.classList.remove('is-checked');
        switchBody.setAttribute('value', 0);
    } else {
        // 如果开关是关闭的，打开它
        switchOn.classList.add('is-active');
        switchOff.classList.remove('is-active');
        switchBody.classList.add('is-checked');
        switchBody.setAttribute('value', 1);
    }
}