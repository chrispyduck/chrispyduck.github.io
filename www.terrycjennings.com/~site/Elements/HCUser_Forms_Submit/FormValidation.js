// ********************************************************************************************
// *	  Javscript used for error checking required form fields.			      *
// ********************************************************************************************

// All of the error messages that are to be displayed are appended to this string
// in order to only display one message for the entire form rather than displaying multiple
// alert windows
var errorMsg = "\n";


// The ValidateField function is called for each required field in the form. It makes sure
// the field is not empty or unchecked depending on the type of field given.
// This function also adds an error string to the end of the errorMsg variable when it comes
// across a field that is invalid
// inputs
function ValidateField(field, msg) {  

	// check for an empty text field
	if (field.type=='text') {
		if (field.value.trim().length == 0) {
			errorMsg += msg+ "\n"; 
		}
	} else if (field.type=='checkbox') {
		// check for an unchecked checkbox
		if (!field.checked)  {
			errorMsg += msg + "\n"; 
		}
	} else if (field.type=='textarea') {
		// check for an empty textarea
		if (field.value.trim().length ==0) {
			errorMsg += msg+ "\n"; 
		}
	} else {
		// check for unchecked radio buttons
		var bChecked = false;
		if(field.value) // if this is true, then there is only one button (we need to check differently) or it's chrome.
			if(field.checked)
				bChecked = true;			
		// Go through the array just in case
		for (i=0; i < field.length; i++) {
			if (field[i].checked)
				bChecked = true;
		}
		
		if (!bChecked) {
			errorMsg += msg+ "\n";	
		}
	}
}
		

	


// The DisplayError function formats and displays the error message(s) if there are any. 
// If no errors were found, it simply submits the form.
// TODO:  we should rename this fxn to DisplayErrorOrSubmit, because it submits the form if there are no errors.
// We can't rename this fxn right now because pages published in classic use this fxn.  However, once everyone converts 
// to LPX, DisplayError will no longer be referenced on user pages, and we can safely switch to a new descriptive name.
function DisplayError(form, name)
{
	// if there s an error message, display it.
	if (errorMsg!="\n") {
		// add the default error string to the beginning of the error message
		var errorMsg2 = "There's a problem with the form submission! \n\n";
		errorMsg2 += errorMsg
		alert(errorMsg2);

		// reset the error message after displaying, so the user can attempt
		// submission again.
		errorMsg = "\n";
	} else {
	   // set the value of the button name so multiple submit buttons can work
	   if (form.elements["FORM_SUBMIT_BUTTON_NAME"] != null) {
		   form.elements["FORM_SUBMIT_BUTTON_NAME"].value = name;
	   }
	   // if no error, submit the form
	   form.submit();
	}
}

// ********************************************************************************************
// *	  Javscript used to support LPX forms elements					      *
// ********************************************************************************************

// get selected value of a radio group
function GetRadioValue(radioGroup)
{
	if(radioGroup.value)
	{
		if(radioGroup.checked)
		{
			return radioGroup.value;
		}
	}
	for (var i = 0; i < radioGroup.length; i++)
	{
		if (radioGroup[i].checked)
		{
			return radioGroup[i].value;
		}
	}
	return "";
}

function Trim(inputString) {
	if (typeof inputString != "string") { return inputString; }
	var retValue = inputString;
	var ch = retValue.substring(0, 1);
	while (ch == " ") {
		retValue = retValue.substring(1, retValue.length);
		ch = retValue.substring(0, 1);
	}
	ch = retValue.substring(retValue.length-1, retValue.length);
	while (ch == " ") {
		retValue = retValue.substring(0, retValue.length-1);
		ch = retValue.substring(retValue.length-1, retValue.length);
	}
	while (retValue.indexOf("  ") != -1) {
		retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length);
	}
	return retValue;
}

// gets form element type
function GetType(element)
{
	if(element.type == null)
	{
		// type is null for RadioGroups, so you have to get it from the first item in the group
		return element[0].type;
	}
	return element.type;
}

// gets the form object based on its uniqueID
// in LPX, DIVs are id-ed by the uniqueIDs of the elements, the actual forms are named "FORM_" + uniqueID
function GetForm(strUniqueID)
{
	var objForm;
	if(navigator.appName == 'Netscape' && parseInt(navigator.appVersion) < 5)
	{
		// for NS4, we retrieve the first form in the layer id-ed by the uniqueID
		objForm = document.layers[strUniqueID].document.forms[0];
	}
	else
	{
		// otherwise we just address the form by "FORM_" + uniqueID
		objForm = document.forms["FORM_"+strUniqueID];
	}
	return objForm;
}

// The following functions operate on Homestead form elements dropped on user's pages.  In LPX, form element data is
// structured into javascript arrays that get published on user pages:
// 	unique_id[] = id of the form element
//	form_name[] = name of the form element
//	required[]  = "true"/"false" whether we need to validate this field
//	req_message[] = string of the message to display if required field is empty

// resets all the Homestead form elements on the user's page
function ResetHSForms()
{
	// iterate through array of form elements and reset them
	for (i=0; i<form_name.length; i++)
	{
		var strUniqueID = unique_id[i];
		var srcForm = GetForm(strUniqueID);
		srcForm.reset();
	}
}

// processes the form submission
function ProcessHSForms(submitForm)
{
	// iterate through array of form elements and copy their values into the form that we want to submit
	for (j=0; j<form_name.length; j++)
	{
		// get form element properties from the arrays
		var strUniqueID = unique_id[j];
		var strFormName = form_name[j];
		var bRequired = required[j] == "true";
		var strReqMessage = req_message[j];
		// prepare destination and source form fields
		var destField = submitForm.elements[strFormName];
		var srcForm = GetForm(strUniqueID);
		var srcField = srcForm.elements[strFormName];
		var strType = GetType(srcField);
		
		if(bRequired)
		{
			if(strReqMessage == "")
			{
				strReqMessage = "The element " + strFormName + " is required";
			}
			ValidateField(srcField, strReqMessage);
		}

		if(strType == "text" || strType == "textarea")
		{
			destField.value = srcField.value;
		}
		else if(strType == "checkbox")
		{
			if(srcField.checked)
			{
				destField.value = srcField.value;
			}
			else
			{
				destField.value = "";
			}
		}
		else if(strType == "radio")
		{
			destField.value = GetRadioValue(srcField);
		}
		else if(strType == "select-one" || strType == "select-multiple")
		{
			destField.value = srcField.options[srcField.selectedIndex].value;
		}
	}
	// this fxn will display any errors found during validation, otherwise submit the form
	DisplayError(submitForm);
}