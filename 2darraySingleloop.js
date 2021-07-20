      // var allPersonAgeName = [
        //     [20, 32, 14, 31], //0
        //     ['a', 'b', 'c', 'd'] //1

        // ]

        // for (var i = 0; i < allPersonAgeName.length; i++) {
        //     var k = 0;
        //     for (var j = 0; j < allPersonAgeName[i].length; j++) {
        //         console.log(`Person name is ${allPersonAgeName[1][j]} and age is ${allPersonAgeName[0][j]}`)

        //     }
        //     i++
        // }



        // for (var i = 0; i < allPersonAge.length; i++) {
        //     for (j = 0; j < allPersonAge[i].length; j++) {
        //         console.log('person name is' + allPersonName[j] + ' ' + allPersonAge[i])
        //     }
        // }


        function personInfo() {

        }

        //  for(var i = 0; i< allPersonAge.length; i++){
        //      console.log('Person ame is: ' + allPersonName[i] + 'and age is : ' + allPersonAge[i])
        //  }

        // Nmae is a and age = 22

        //     var allPersonAgeName = [
        //         [20, 30, 40, 50], //0 index
        //         ['a', 'b', 'c', 'd'], //1
        //         [200, 300, 400, 500], //2
        //         ['aa', 'bb', 'cc', 'dd'],//3
        //         [2000, 3000, 4000, 5000], //4
        //         ['aaa', 'bbb', 'ccc', 'ddd'], //5
        //         [20000, 30000, 40000, 50000], //6
        //         ['aaaa', 'bbbb', 'cccc', 'dddd'] //7
        //     ]
        //  allPersonAgeName[0] =  [1,2,3,4]
        //  allPersonAgeName[1] =  ['a', 'b', 'c', 'd']

            //var arr = []
            // i = row
            // j = column
        //     for (var i = 0; i < allPersonAgeName.length; i++) {

        //         for (var j = 0; j < allPersonAgeName[i].length; j++) {
        // if (i % 2 == 0) {
        //     var even = i
        //     var odd = i + 1
        //     //console.log(even, odd)
        //     // arr.push([allPersonAgeName[even][j], allPersonAgeName[odd][j]])
        //     console.log(`Person name is ${allPersonAgeName[odd][j]} and age is ${allPersonAgeName[even][j]}`)
        // }
        //         }

        //     }
        //     console.log(allPersonAgeName.length)


        //    একটা ফাংশন যেটা আরেকটা ফাংশন এক্সিকিউট হওয়ার পর এক্সিকিউট হয়। আর এজন্যেই এটার নাম কলব্যাক ফাংশন।


        var allPersonAgeName = [
            [20, 30, 40, 50], //0 index
            ['a', 'b', 'c', 'd'], //1
            [200, 300, 400, 500], //2
            ['aa', 'bb', 'cc', 'dd'],//3
            [2000, 3000, 4000, 5000], //4
            ['aaa', 'bbb', 'ccc', 'ddd'], //5
            [20000, 30000, 40000, 50000], //6
            ['aaaa', 'bbbb', 'cccc', 'dddd'] //7
        ]

        var run = true;
        var i = 0; //start point
        var rcLength = allPersonAgeName[0].length * allPersonAgeName.length; // row and column  total traverse number
        var row = 0; // row init
        var col = 0; // column init

        while (run) {
            // terminated point
            if (i == rcLength) {
                run = false;
            } else {
                //only print even number row with two-element by increase +1
                // arr[row][col]
                // arr[row + 1][col]

                if (row % 2 == 0) {
                    console.log(`Person name is ${allPersonAgeName[row + 1][col]} and age is ${allPersonAgeName[row][col]}`)
                }else{
                    // no need to print odd number index row
                }
                if (col == allPersonAgeName[0].length - 1) {
                    col = 0; // column reset after column traverse finished in one row
                    row++ // row increase after column traverse finished of one row
                } else {
                    //console.log(col)
                    col++ //column increase
                }
            }
            //console.log(i)
            //infinitely increase
            i++

        }
