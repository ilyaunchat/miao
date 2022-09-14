var ilyaunchat = {
    chunk: function (array, size = 1) {
        var resultAry = []
        var itemAry = []
        var count = 0

        for (var i = 0; i < array.length; i++) {
            count++
            if (count <= size) {
                itemAry.push(array[i])
            } else if (count > size) {
                count = 0
                resultAry.push(itemAry.slice())
                itemAry = []
                itemAry.push(array[i])
            }
        }

        if (itemAry.length) {
            resultAry.push(itemAry.slice())
        }

        return resultAry
    },

    compact: function (array) {
        var resultAry = []

        for (var item of array) {
            if (Boolean(item)) {
                resultAry.push(item)
            }
        }

        return resultAry
    },

    difference: function (array, ...values) {
        var resultAry = []

        var map = {}

        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < values[i].length; j++) {
                if (!(values[i][j] in map)) {
                    map[values[i][j]] = 1
                } else {
                    map[values[i][j]]++
                }
            }
        }

        for (var i = 0; i < array.length; i++) {
            var val = ((map[array[i]]) || 0)
            if (!val) {
                resultAry.push(array[i])
            }
        }

        return resultAry
    },
}
