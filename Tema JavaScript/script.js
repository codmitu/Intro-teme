  // Am dezactivat tastatura 
        document.onkeydown = function (e) {
            return false;
        }

        var existing = document.getElementsByClassName("chenar-text")[0].value;
        var existing1 = document.getElementsByClassName("chenar-text")[1].value;
        var existing2 = document.getElementsByClassName("chenar-text")[2].value;


        function generate() {
            var random0 = Math.round(Math.random() * 269) + 1;
            existing = existing + random0;
            document.getElementsByClassName("chenar-text")[0].value = existing;
            document.getElementsByClassName("chenar-text")[0].focus();


            var random1 = Math.round(Math.random() * 269) + 1;
            existing1 = existing1 + random1;
            document.getElementsByClassName("chenar-text")[1].value = existing1;

            var random2 = Math.round(Math.random() * 269) + 1;
            existing2 = existing2 + random2;
            document.getElementsByClassName("chenar-text")[2].value = existing2;

            return existing, existing1, existing2;
        }

        function one() {
            existing = existing + "1";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function two() {
            existing = existing + "2";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function three() {
            existing = existing + "3";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function four() {
            existing = existing + "4";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function five() {
            existing = existing + "5";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function six() {
            existing = existing + "6";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function seven() {
            existing = existing + "7";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function eight() {
            existing = existing + "8";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function nine() {
            existing = existing + "9";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function zero() {
            existing = existing + "0";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            return existing;
        }

        function one1() {
            existing1 = existing1 + "1";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function two1() {
            existing1 = existing1 + "2";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function three1() {
            existing1 = existing1 + "3";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function four1() {
            existing1 = existing1 + "4";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function five1() {
            existing1 = existing1 + "5";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function six1() {
            existing1 = existing1 + "6";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function seven1() {
            existing1 = existing1 + "7";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function eight1() {
            existing1 = existing1 + "8";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function nine1() {
            existing1 = existing1 + "9";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function zero1() {
            existing1 = existing1 + "0";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            return existing1;
        }

        function one2() {
            existing2 = existing2 + "1";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function two2() {
            existing2 = existing2 + "2";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function three2() {
            existing2 = existing2 + "3";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function four2() {
            existing2 = existing2 + "4";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function five2() {
            existing2 = existing2 + "5";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function six2() {
            existing2 = existing2 + "6";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function seven2() {
            existing2 = existing2 + "7";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function eight2() {
            existing2 = existing2 + "8";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function nine2() {
            existing2 = existing2 + "9";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function zero2() {
            existing2 = existing2 + "0";
            document.getElementsByClassName("chenar-text")[2].value = existing2;
            return existing2;
        }

        function clean() {
            existing = "";
            document.getElementsByClassName("chenar-text")[0].value = existing;
            existing1 = "";
            document.getElementsByClassName("chenar-text")[1].value = existing1;
            existing2 = "";
            document.getElementsByClassName("chenar-text")[2].value = existing2;

            return existing, existing1, existing2;
        }

        //functia formulei matematice
        function calculate() {
            result = eval(existing);
            result1 = eval(existing1);
            result2 = eval(existing2);

            formula = ((result * result1) + (result1 * result2)) / (result + result1);
            alert(formula);
        }






 var existing_ = document.getElementsByClassName("chenar-text_")[0].value;
        var existing1_ = document.getElementsByClassName("chenar-text_")[1].value;
        var existing2_ = document.getElementsByClassName("chenar-text_")[2].value;

        function generate_() {
            var random0_ = Math.round(Math.random() * 269) + 1;
            existing_ = existing_ + random0_;
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            document.getElementsByClassName("chenar-text_")[0].focus();


            var random1_ = Math.round(Math.random() * 269) + 1;
            existing1_ = existing1_ + random1_;
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;

            var random2_ = Math.round(Math.random() * 269) + 1;
            existing2_ = existing2_ + random2_;
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;

            return existing_, existing1_, existing2_;
        }

        function one_() {
            existing_ = existing_ + "1";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function two_() {
            existing_ = existing_ + "2";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function three_() {
            existing_ = existing_ + "3";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function four_() {
            existing_ = existing_ + "4";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function five_() {
            existing_ = existing_ + "5";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function six_() {
            existing_ = existing_ + "6";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function seven_() {
            existing_ = existing_ + "7";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function eight_() {
            existing_ = existing_ + "8";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function nine_() {
            existing_ = existing_ + "9";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function zero_() {
            existing_ = existing_ + "0";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            return existing_;
        }

        function one1_() {
            existing1_ = existing1_ + "1";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function two1_() {
            existing1_ = existing1_ + "2";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function three1_() {
            existing1_ = existing1_ + "3";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function four1_() {
            existing1_ = existing1_ + "4";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function five1_() {
            existing1_ = existing1_ + "5";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function six1_() {
            existing1_ = existing1_ + "6";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function seven1_() {
            existing1_ = existing1_ + "7";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function eight1_() {
            existing1_ = existing1_ + "8";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function nine1_() {
            existing1_ = existing1_ + "9";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function zero1_() {
            existing1_ = existing1_ + "0";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            return existing1_;
        }

        function one2_() {
            existing2_ = existing2_ + "1";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function two2_() {
            existing2_ = existing2_ + "2";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function three2_() {
            existing2_ = existing2_ + "3";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function four2_() {
            existing2_ = existing2_ + "4";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function five2_() {
            existing2_ = existing2_ + "5";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function six2_() {
            existing2_ = existing2_ + "6";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function seven2_() {
            existing2_ = existing2_ + "7";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function eight2_() {
            existing2_ = existing2_ + "8";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function nine2_() {
            existing2_ = existing2_ + "9";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function zero2_() {
            existing2_ = existing2_ + "0";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing2_;
        }

        function clean_() {
            existing_ = "";
            document.getElementsByClassName("chenar-text_")[0].value = existing_;
            existing1_ = "";
            document.getElementsByClassName("chenar-text_")[1].value = existing1_;
            existing2_ = "";
            document.getElementsByClassName("chenar-text_")[2].value = existing2_;
            return existing_, existing1_, existing2_;
        }

        //functia numarului maxim
        function calculate_() {
            a = eval(existing_);
            b = eval(existing1_);
            c = eval(existing2_);


            if (isNaN(a) && isNaN(b) && isNaN(c)) {
                alert("Please enter a number in at least one of the inputs.")
                endif
            }
            if (a > b && a > c) {
                alert(a)
                endif
            }
            if (b > a && b > c) {
                alert(b)
                endif
            }
            if (c > a && c > b) {
                alert(c)
                endif
            }
            if (a > b || a > c) {
                alert(a)
                endif
            }
            if (b > a || b > c) {
                alert(b)
                endif
            }
            if (c > a || c > b) {
                alert(c)
                endif
            }
            if (!isNaN(a)) {
                alert(a)
                endif
            }
            if (!isNaN(b)) {
                alert(b)
                endif
            }
            if (!isNaN(c)) {
                alert(c)
                endif
            }
        }






 var existing3 = document.getElementsByClassName("chenar-text3")[0].value;
        var existing13 = document.getElementsByClassName("chenar-text3")[1].value;

        function generate3() {
            var random3 = Math.round(Math.random() * 269) + 1;
            existing3 = existing3 + random3;
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            document.getElementsByClassName("chenar-text3")[0].focus();


            var random13 = Math.round(Math.random() * 269) + 1;
            existing13 = existing13 + random13;
            document.getElementsByClassName("chenar-text3")[1].value = existing13;

            return existing3, existing13;
        }
        function one3() {
            existing3 = existing3 + "1";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function two3() {
            existing3 = existing3 + "2";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function three3() {
            existing3 = existing3 + "3";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function four3() {
            existing3 = existing3 + "4";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function five3() {
            existing3 = existing3 + "5";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function six3() {
            existing3 = existing3 + "6";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function seven3() {
            existing3 = existing3 + "7";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function eight3() {
            existing3 = existing3 + "8";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function nine3() {
            existing3 = existing3 + "9";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function zero3() {
            existing3 = existing3 + "0";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            return existing3;
        }

        function one13() {
            existing13 = existing13 + "1";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function two13() {
            existing13 = existing13 + "2";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function three13() {
            existing13 = existing13 + "3";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function four13() {
            existing13 = existing13 + "4";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function five13() {
            existing13 = existing13 + "5";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function six13() {
            existing13 = existing13 + "6";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function seven13() {
            existing13 = existing13 + "7";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function eight13() {
            existing13 = existing13 + "8";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function nine13() {
            existing13 = existing13 + "9";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function zero13() {
            existing13 = existing13 + "0";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing13;
        }

        function clean3() {
            existing3 = "";
            document.getElementsByClassName("chenar-text3")[0].value = existing3;
            existing13 = "";
            document.getElementsByClassName("chenar-text3")[1].value = existing13;
            return existing3, existing13;
        }

        // functia suma numerelor pare     
        function calculate3() {
            m = parseInt(document.getElementsByClassName("chenar-text3")[0].value);
            n = parseInt(document.getElementsByClassName("chenar-text3")[1].value);

            if (n > m) [n, m] = [m, n]
            n = (n % 2 === 0) ? n : n + 1;
            m = (m % 2 === 0) ? m : m - 1;
            var sum = 0;

            if (m >= n) {
                var numbers = (m - n) / 2 + 1;
                sum = numbers * (n + numbers - 1);
            }
            alert(sum);
        }
