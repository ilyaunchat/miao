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

    concat: function (array, ...values) {
        var remain = values
        var resultAry = []

        for (var i = 0; i < array.length; i++) {
            resultAry.push(array[i])
        }

        for (var i = 0; i < remain.length; i++) {
            if (Array.isArray(remain[i])) {
                for (var j = 0; j < (remain[i]).length; j++) {
                    resultAry.push(remain[i][j])
                }
            } else if (!(Array.isArray(remain[i]))) {
                resultAry.push(remain[i])
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

    drop: function (array, n = 1) {
        var resultAry = []
        resultAry = array.slice()
        for (var i = 1; i <= n; i++) {
            resultAry.shift()
        }
        return resultAry
    },

    dropRight: function (array, n = 1) {
        var resultAry = []
        resultAry = array.slice()
        for (var i = 1; i <= n; i++) {
            resultAry.pop()
        }
        return resultAry
    },

    fill: function (array, value, start = 0, end = array.length) {
        var resultAry = []
        resultAry = array.slice()

        for (var i = start; i < end; i++) {
            resultAry[i] = value
        }

        return resultAry
    },

    flatten: function (array) {
        var resultAry = []

        for (var i = 0; i < array.length; i++) {
            if (!(Array.isArray(array[i]))) {
                resultAry.push(array[i])
            } else if (Array.isArray(array[i])) {
                for (var j = 0; j < (array[i]).length; j++) {
                    resultAry.push(array[i][j])
                }
            }
        }

        return resultAry
    },

    flattenDeep: function (array) {
        var resultAry = []

        function innerFlat(array) {
            for (var i = 0; i < array.length; i++) {
                if (!(Array.isArray(array[i]))) {
                    resultAry.push(array[i])
                } else {
                    innerFlat(array[i])
                }
            }
        }

        innerFlat(array)

        return resultAry
    },

    flattenDepth: function (array, depth = 1) {
        var resultAry = []
        var level = 1

        function innerFlat(array) {
            for (var i = 0; i < array.length; i++) {
                if (!(Array.isArray(array[i]))) {
                    resultAry.push(array[i])
                } else if ((Array.isArray(array[i])) && (level <= depth)) {
                    level++
                    innerFlat(array[i])
                } else if ((Array.isArray(array[i])) && (level > depth)) {
                    level = 1
                    resultAry.push(array[i])
                }
            }
        }

        innerFlat(array)

        return resultAry
    },

    fromPairs: function (pairs) {
        var map = {}
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    },

    head: function (array) {
        return array[0]
    },

    indexOf: function (array, value, fromIndex = 0) {
        var ary = array.slice()
        var idx = (fromIndex >= 0) ? fromIndex : (fromIndex + ary.length)

        for (var i = idx; i < ary.length; i++) {
            if (ary[i] === value) {
                return i
            }
        }

        return -1
    },

    initial: function (array) {
        return array.slice(0, array.length - 1)
    },

    intersection: function (...arrays) {
        var resultAry = []
        var flag = 1

        for (var i = 0; i < arrays[0].length; i++) {
            for (var j = 1; j < arrays.length; j++) {
                if ((arrays[j]).indexOf(arrays[0][i]) === -1) {
                    flag = 0
                    break
                }
            }

            if (flag === 0) {
                flag = 1
            } else if (flag === 1) {
                resultAry.push(arrays[0][i])
            }
        }

        return resultAry
    },

    join: function (array, separator = ',') {
        var resultStr = ""

        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                resultStr += String(array[i])
                break
            } else {
                resultStr += (String(array[i]) + separator)
            }
        }

        return resultStr
    },

    last: function (array) {
        return array.at(-1)
    },
}
