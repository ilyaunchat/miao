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

    lastIndexOf: function (array, value, fromIndex = array.length - 1) {
        var ary = array.slice()
        var idx = (fromIndex >= 0) ? fromIndex : (ary.length + fromIndex)

        for (var i = idx; i >= 0; i--) {
            if (ary[i] === value) {
                return i
            }
        }

        return -1
    },

    nth: function (array, n = 0) {
        return array.at(n)
    },

    pull: function (array, ...values) {
        var standardAry = values
        var count = 0
        var boundary = array.length - count

        for (var i = 0; i < array.length; i++) {
            if (standardAry.indexOf(array[i]) === -1) {
                continue
            } else if (standardAry.indexOf(array[i]) !== -1) {
                if ((i + 1) === boundary) {
                    count++
                    boundary = array.length - count
                    break
                } else {
                    for (var j = i + 1; j < boundary; j++) {
                        var temp = array[j]
                        array[j] = array[j - 1]
                        array[j - 1] = temp
                    }
                    count++
                    boundary = array.length - count
                    i = i - 1
                }
            }
        }

        while (count > 0) {
            array.pop()
            count--
        }

        return array
    },

    pullAll: function (array, values) {
        var standardAry = values
        var count = 0
        var boundary = array.length - count

        for (var i = 0; i < array.length; i++) {
            if (standardAry.indexOf(array[i]) === -1) {
                continue
            } else if (standardAry.indexOf(array[i]) !== -1) {
                if ((i + 1) === boundary) {
                    count++
                    boundary = array.length - count
                    break
                } else {
                    for (var j = i + 1; j < boundary; j++) {
                        var temp = array[j]
                        array[j] = array[j - 1]
                        array[j - 1] = temp
                    }
                    count++
                    boundary = array.length - count
                    i = i - 1
                }
            }
        }

        while (count > 0) {
            array.pop()
            count--
        }

        return array
    },

    pullAt: function (array, indexes) {
        var standardAry = indexes
        var count = 0
        var boundary = array.length - count
        var resultAry = []

        for (var i = 0; i < array.length; i++) {
            if (standardAry.indexOf(i + count) === -1) {
                continue
            } else if (standardAry.indexOf(i + count) !== -1) {
                if ((i + 1) === boundary) {
                    count++
                    boundary = array.length - count
                    break
                } else {
                    for (var j = i + 1; j < boundary; j++) {
                        var temp = array[j]
                        array[j] = array[j - 1]
                        array[j - 1] = temp
                    }
                    count++
                    boundary = array.length - count
                    i = i - 1
                }
            }
        }

        while (count > 0) {
            resultAry.push(array.pop())
            count--
        }

        return resultAry
    },

    reverse: function (array) {
        var left = 0
        var right = array.length - 1

        while (left < right) {
            var temp = array[left]
            array[left] = array[right]
            array[right] = temp

            left++
            right--
        }

        return array
    },

    slice: function (array, start = 0, end = array.length) {
        var from = (start >= 0) ? start : array.length + start
        var to = (end >= 0) ? end : array.length + end
        var resultAry = array.slice()

        if (to < array.length) {
            var diff = array.length - to
            while (diff > 0) {
                resultAry.pop()
                diff--
            }
        }

        if (from > 0) {
            var diff = from - 0
            while (diff > 0) {
                resultAry.shift()
                diff--
            }
        }

        return resultAry
    },

    sortedIndex: function (array, value) {
        var left = 0
        var right = array.length

        while (left < right) {
            var mid = Math.floor(left + (right - left) / 2)

            if (array[mid] === value) {
                right = mid
            } else if (array[mid] > value) {
                right = mid
            } else if (array[mid] < value) {
                left = mid + 1
            }
        }

        return left
    },

    sortedIndexOf: function (array, value) {
        var left = 0
        var right = array.length

        while (left < right) {
            var mid = Math.floor(left + (right - left) / 2)

            if (array[mid] === value) {
                right = mid
            } else if (array[mid] > value) {
                right = mid
            } else if (array[mid] < value) {
                left = mid + 1
            }
        }

        return (array[left] === value) ? left : -1
    },

    sortedLastIndex: function (array, value) {
        var left = 0
        var right = array.length

        while (left < right) {
            var mid = Math.floor(left + (right - left) / 2)

            if (array[mid] === value) {
                left = mid + 1
            } else if (array[mid] > value) {
                right = mid
            } else if (array[mid] < value) {
                left = mid + 1
            }
        }

        return left
    },

    sortedLastIndexOf: function (array, value) {
        var left = 0
        var right = array.length

        while (left < right) {
            var mid = Math.floor(left + (right - left) / 2)

            if (array[mid] === value) {
                left = mid + 1
            } else if (array[mid] > value) {
                right = mid
            } else if (array[mid] < value) {
                left = mid + 1
            }
        }

        return (array[left - 1] === value) ? (left - 1) : -1
    },

    sortedUniq: function (array) {
        var resultAry = []

        var left = 0
        var right = left + 1
        var flag = 0

        while (right < array.length) {
            if ((array[left] === array[right]) && (flag === 0)) {
                resultAry.push(array[left])
                flag = 1
                right++
            } else if ((array[left] !== array[right]) && (flag === 1)) {
                resultAry.push(array[right])
                flag = 1
                left = right
                right++
            } else if ((array[left] !== array[right]) && (flag === 0)) {
                resultAry.push(array[left])
                resultAry.push(array[right])
                left = right
                flag = 1
                right++
            } else if ((array[left] === array[right]) && (flag === 1)) {
                right++
            }
        }

        return resultAry
    },

    sortedUniqBy: function (array, iteratee) {
        var operatedAry = array.map(it => iteratee(it))
        var resultAry = []

        var left = 0
        var right = left + 1
        var flag = 0

        while (right < operatedAry.length) {
            if ((operatedAry[left] === operatedAry[right]) && (flag === 0)) {
                resultAry.push(array[left])
                flag = 1
                right++
            } else if ((operatedAry[left] !== operatedAry[right]) && (flag === 1)) {
                resultAry.push(array[right])
                flag = 1
                left = right
                right++
            } else if ((operatedAry[left] !== operatedAry[right]) && (flag === 0)) {
                resultAry.push(array[left])
                resultAry.push(array[right])
                left = right
                flag = 1
                right++
            } else if ((operatedAry[left] === operatedAry[right]) && (flag === 1)) {
                right++
            }
        }

        return resultAry
    },

    tail: function (array) {
        return array.slice(1)
    },

    take: function (array, n = 1) {
        return array.slice(0, n)
    },

    takeRight: function (array, n = 1) {
        var idx = (n >= array.length) ? 0 : array.length - n
        return array.slice(idx)
    },
}
