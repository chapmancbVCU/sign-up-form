/******************************************************************************
 *         Name: validation.js
 *       Author: Chad Chapman
 * Date Created: October 14, 2022
 *  Description: Contains functions for validating form input.
******************************************************************************/

/******************************************************************************
 *        Name: formatPhoneNumber
 * Description: Function that receives number as an input and formats it based
 *              on the length.  For strings less than three it does nothing.
 *              For values less than 7 you get a formatted string that looks
 *              like xxx-xxx.  If the input string is more than 7 then the
 *              formatted string looks like xxx-xxx-xx.  Client side validation
 *              is recommened as well.  
 *  
 *              Do not call this function directly within the html file.  The 
 *              phoneNumberFormatter function will be used to call this 
 *              function in order to set the correct format.
 *   Arguments: value - the string of numbers
 *     Returns: The properly formatted string based on length.
 *****************************************************************************/
function formatPhoneNumber(value) {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if(phoneNumberLength < 3) {
        return phoneNumber;
    }

    if(phoneNumberLength < 7) {
        return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(
        3,
        6,
    )}-${phoneNumber.slice(6,9)}`;
}


/******************************************************************************
 *        Name: phoneNumberFormatter
 * Description: Uses getElementbyId('phone') to get phone number input from
 *              webpage.  This function calls the formatPhoneNumber function
 *              to get the correct format.  This is the function that should
 *              be referenced in the html file.
 *   Arguments: NONE
 *     Returns: NONE
 *****************************************************************************/
function phoneNumberFormatter() {
    const inputField = document.getElementById('phone');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

