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
    // If input is falsy eg if the suer delets the input, then just return.
    if(!value) return value;

    // Clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');

    /* phoneNumberLength is used to know when to apply or formatting for the
       phone number. */
    const phoneNumberLength = phoneNumber.length;

    /* We need to return the value with no formatting if its less than four
       digits.  This is to avoid weird behavior that occurs if you format
       the area code too early. */
    if(phoneNumberLength < 4) {
        return phoneNumber;
    }

    /* If phoneNumberLength is greater than 4 and less than 7 we start to
       return the formatted number. */
    if(phoneNumberLength < 7) {
        return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }

    /* Finally, if the phoneNumberLength is greater than seven, we add the 
       last bit of formatting and return it. */
    return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(
        3,
        6,
    )}-${phoneNumber.slice(6,9)}`;
}


/******************************************************************************
 *        Name: phoneNumberFormatter
 * Description: Uses getElementbyId('phone') to get phone number input from
 *              webpage.  The way this function works is we grab the value of
 *              what the user is typing into the input.  Next we format the
 *              value and set the value of the input field in the html
 *              document.
 *   Arguments: NONE
 *     Returns: NONE
 *****************************************************************************/
function phoneNumberFormatter() {
    const inputField = document.getElementById('phone');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}









/******************************************************************************
 *        Name: 
 * Description: 
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/