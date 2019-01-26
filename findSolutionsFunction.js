
$(document).ready(function () {
    $("#showSolutionsBtn").click(function () {
        $("#solution").slideToggle("slow");
    });
    $("#showSolutionsDesc").click(function () {
        $("#solution").slideToggle("slow");
    });
});

function findSolution() {
    
    var num1=0, num2=0, num3=0, num4=0, op1=0, op2=0, op3=0;
    for (num1 = 0; num1 < 4; num1++) {
        for (num2 = 0; num2 < 4; num2++) {
            if (num2 == num1) continue;
            for (num3 = 0; num3 < 4; num3++) {
                num4 = 6 - num1 - num2 - num3;
                if (num3 == num1 || num3 == num2) continue;
                for (op1 = 0; op1 < 4; op1++) {
                    for (op2 = 0; op2 < 4; op2++) {
                        for (op3 = 0; op3 < 4; op3++) {
                            if (checkSolution(numbers[num1], numbers[num2], numbers[num3], numbers[num4], op1, op2, op3) == 24) {
                                if (solution.includes(numbers[num1] + "" + showOp(op1) + "" + numbers[num2] + "" + showOp(op2) + "" +
                                    numbers[num3] + "" + showOp(op3) + "" + numbers[num4])) continue;
                                solution += numbers[num1] + "" + showOp(op1) + "" + numbers[num2] + "" + showOp(op2) + "" +
                                    numbers[num3] + "" + showOp(op3) + "" + numbers[num4] + "<br>";
                                
                            }
                        }
                    }
                }
            }
        }
    }
    if (solution == "") dealCards();
    
}



function checkSolution(num1, num2, num3, num4, op1, op2, op3) {
    return findOps(findOps(findOps(num1, op1, num2), op2, num3), op3, num4);
}

function findOps(num1, op, num2) {
    switch (op) {
        case 0:
            return num1 + num2;
            break;
        case 1:
            return num1 - num2;
            break;
        case 2:
            return num1 * num2;
            break;
        case 3:
            return num1 / num2;
            break;
    }
}

function showOp(op) {
    switch (op) {
        case 0:
            return "+";
            break;
        case 1:
            return "-";
            break;
        case 2:
            return "x";
            break;
        case 3:
            return "/";
            break;
    }
}