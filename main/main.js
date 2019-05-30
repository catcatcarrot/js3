module.exports = function main(str) {
            var numArray = []
            for (var i = 0; i < str.length; i++)
                numArray[numArray.length++] = Number(str.charAt(i))
            var line1_1 = "._."
            var line1_2 = "..."
            var line2_1 = "|.|"
            var line2_2 = "..|"
            var line2_3 = "._|"
            var line2_4 = "|_|"
            var line2_5 = "|_."
            var line2_6 = "..|"
            var line3_1 = "|_|"
            var line3_2 = "..|"
            var line3_3 = "|_."
            var line3_4 = "._|"
            var cha0 = {
                line1: line1_1,
                line2: line2_1,
                line3: line3_1
            }
            var cha1 = {
                line1: line1_2,
                line2: line2_2,
                line3: line3_2
            }
            var cha2 = {
                line1: line1_1,
                line2: line2_3,
                line3: line3_3
            }
            var cha3 = {
                line1: line1_1,
                line2: line2_3,
                line3: line3_4
            }
            var cha4 = {
                line1: line1_2,
                line2: line2_4,
                line3: line3_2
            }
            var cha5 = {
                line1: line1_1,
                line2: line2_5,
                line3: line3_4
            }
            var cha6 = {
                line1: line1_1,
                line2: line2_5,
                line3: line3_1
            }
            var cha7 = {
                line1: line1_1,
                line2: line2_2,
                line3: line3_2
            }
            var cha8 = {
                line1: line1_1,
                line2: line2_4,
                line3: line3_1
            }
            var cha9 = {
                line1: line1_1,
                line2: line2_4,
                line3: line3_2
            }
            var chaArray = [cha0, cha1, cha2, cha3, cha4, cha5, cha6, cha7, cha8, cha9]
            var line = ""
            var lineStr = ""
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < str.length; k++) {
                    var obj = chaArray[numArray[k]]
                    line = "line" + (j + 1)
					if (k == str.length - 1)
                        lineStr += obj[line] + "\n"
                    else
                        lineStr += obj[line] + " "
                }
            }
           return lineStr;
};