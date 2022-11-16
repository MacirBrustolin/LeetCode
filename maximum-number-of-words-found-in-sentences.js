/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

 

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
 

Constraints:

1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and ' ' only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.
*/


/**
 * @param {string[]} sentences
 * @return {number}
 */
 /*
 PARAMETERS: ARRAY OS SENTENCES, WHERE SENTENCES ARE STRINGS THAT HAVE WORDS SEPARETED BY ONE EMPTY SPACE. tHERE IS NO LEADIND SPACE NOR TRAILLING SPACES.
 RESULTS: RETURN THE MAXIMUM NUMBER OF WORDS THAT A SENTENCE HAS
 EXEMPLES: 
        Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
        Output: 6

        Input: sentences = ["please wait", "continue to fight", "continue to win"]
        Output: 3

 PSOUDO CODE: 
    SET A MEX VARIABLE THAT REPRESENTS THE BIGGEST SENTENCE, AND INITIALIZE IT WITH ZERO. 
    GO THROUGH THE ARRAY OF SENTENCES, SPLIT THE SENTENCE BY THE EMPTY SPACE (.SPLIT(' ')) AND RETURN THE NUMBER OF ELEMENTS OF THE SPLIT, IF THIS NUMBER   IS GREATER THAN THE SENTENCE BEFORE IT, PASS THIS NUMBER TO THE MAX VARIABLE.

*/
var mostWordsFound = function(sentences) {
    let max = 0
    sentences.forEach(e => {
        if (e.split(' ').length > max){
            max = e.split(' ').length
        }
    })
    return max
};
