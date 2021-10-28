//Given a string st, find the length of the longest substring without repeating characters.
 
//Example 1:
//Input: st = "xyzxyzuu"
//Output: 3
//Explanation: The answer is "xyz", with the length of 3.

//Example 2:
//Input: st = "xxxx"
//Output: 1
//Explanation: The answer is "x", with the length of 1.

//Example 3:
//Input: st = "xwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.

//Example 4:
//Input: st = ""
//Output: 0
 
//Constraints:
//0 <= st.length <= 5 * 104
//s consists of English letters, digits, symbols and spaces.


function lengthOfLongestSubstring(string) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
          current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        
        max = Math.max(max, current_string.length);
    }
    console.log('Input:',string,'Output:',(max!==0)?max:'""')
    //return [{'Input:':string,'Output:':(max!==0)?max:'""'}];
}

lengthOfLongestSubstring("xyzxyzuu"); //xyzu
lengthOfLongestSubstring("xxxx"); //x
lengthOfLongestSubstring("xwwkew"); //wke, kew
lengthOfLongestSubstring(""); //''
lengthOfLongestSubstring("ABDEFGABEF"); 
lengthOfLongestSubstring("GEEKSFORGEEKS"); 
