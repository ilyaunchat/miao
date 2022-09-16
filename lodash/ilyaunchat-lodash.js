var ilyaunchat = function () {
    function chunk(array, size = 1) {
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
    }

    function compact(array) {
        var resultAry = []

        for (var item of array) {
            if (Boolean(item)) {
                resultAry.push(item)
            }
        }

        return resultAry
    }

    function concat(array, ...values) {
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
    }

    function difference(array, ...values) {
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
    }

    function drop(array, n = 1) {
        var resultAry = []
        resultAry = array.slice()
        for (var i = 1; i <= n; i++) {
            resultAry.shift()
        }
        return resultAry
    }

    function dropRight(array, n = 1) {
        var resultAry = []
        resultAry = array.slice()
        for (var i = 1; i <= n; i++) {
            resultAry.pop()
        }
        return resultAry
    }

    function fill(array, value, start = 0, end = array.length) {
        var resultAry = []
        resultAry = array.slice()

        for (var i = start; i < end; i++) {
            resultAry[i] = value
        }

        return resultAry
    }

    function flatten(array) {
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
    }

    function flattenDeep(array) {
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
    }

    function flattenDepth(array, depth = 1) {
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
    }

    function fromPairs(pairs) {
        var map = {}
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    }

    function head(array) {
        return array[0]
    }

    function indexOf(array, value, fromIndex = 0) {
        var ary = array.slice()
        var idx = (fromIndex >= 0) ? fromIndex : (fromIndex + ary.length)

        for (var i = idx; i < ary.length; i++) {
            if (ary[i] === value) {
                return i
            }
        }

        return -1
    }

    function initial(array) {
        return array.slice(0, array.length - 1)
    }

    function intersection(...arrays) {
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
    }

    function join(array, separator = ',') {
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
    }

    function last(array) {
        return array.at(-1)
    }

    function lastIndexOf(array, value, fromIndex = array.length - 1) {
        var ary = array.slice()
        var idx = (fromIndex >= 0) ? fromIndex : (ary.length + fromIndex)

        for (var i = idx; i >= 0; i--) {
            if (ary[i] === value) {
                return i
            }
        }

        return -1
    }

    function nth(array, n = 0) {
        return array.at(n)
    }

    function pull(array, ...values) {
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
    }

    function pullAll(array, values) {
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
    }

    function pullAt(array, indexes) {
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
    }

    function reverse(array) {
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
    }

    function slice(array, start = 0, end = array.length) {
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
    }

    function sortedIndex(array, value) {
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
    }

    function sortedIndexOf(array, value) {
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
    }

    function sortedLastIndex(array, value) {
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
    }

    function sortedLastIndexOf(array, value) {
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
    }

    function sortedUniq(array) {
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
    }

    function sortedUniqBy(array, iteratee) {
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
    }

    function tail(array) {
        return array.slice(1)
    }

    function take(array, n = 1) {
        return array.slice(0, n)
    }

    function takeRight(array, n = 1) {
        var idx = (n >= array.length) ? 0 : array.length - n
        return array.slice(idx)
    }

    function union(...arrays) {
        var ary = arrays.flat(1)
        var resultAry = []

        for (var i = 0; i < ary.length; i++) {
            if (resultAry.indexOf(ary[i]) === -1) {
                resultAry.push(ary[i])
            }
        }

        return resultAry
    }

    function uniq(array) {
        var resultAry = []

        for (var i = 0; i < array.length; i++) {
            if (resultAry.indexOf(array[i]) === -1) {
                resultAry.push(array[i])
            }
        }

        return resultAry
    }

    function unzip(array) {
        var resultAry = []
        var tempAry = []
        var x = array.length
        var y = array[0].length

        for (var i = 0; i < y; i++) {
            for (var j = 0; j < x; j++) {
                tempAry.push(array[j][i])
            }
            resultAry.push(tempAry.slice())
            tempAry = []
        }

        return resultAry
    }

    function without(array, ...values) {
        var resultAry = []
        for (var i = 0; i < array.length; i++) {
            if (values.indexOf(array[i]) === -1) {
                resultAry.push(array[i])
            }
        }
        return resultAry
    }

    function zip(...arrays) {
        var resultAry = []
        var tempAry = []
        var x = arrays.length
        var y = arrays[0].length

        for (var i = 0; i < y; i++) {
            for (var j = 0; j < x; j++) {
                tempAry.push(arrays[j][i])
            }
            resultAry.push(tempAry.slice())
            tempAry = []
        }

        return resultAry
    }

    function countBy(collection, iteratee = identity) {
        var map = {}
        if (typeof iteratee === "string") {
            var operatedAry = collection.map(it => it[iteratee])
        } else if (typeof iteratee === "function") {
            var operatedAry = collection.map(it => iteratee(it))
        }

        for (var i = 0; i < operatedAry.length; i++) {
            if (!(operatedAry[i] in map)) {
                map[String(operatedAry[i])] = 1
            } else {
                map[String(operatedAry[i])]++
            }
        }

        return map
    }

    function max(array) {
        if ((array.length === 0) || (Boolean(array) === false)) {
            return undefined
        }

        var max = -Infinity
        for (var i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }

        return max
    }

    function map(collection, iteratee = identity) {
        var resultAry = []

        if (typeof iteratee === "function") {
            if (Array.isArray(collection)) {
                collection.forEach((it, idx, ary) => {
                    resultAry.push(iteratee(it, idx, ary))
                })
            } else if (typeof collection === "object") {
                for (var val of Object.values(collection)) {
                    resultAry.push(iteratee(val))
                }
            }
        } else if (typeof iteratee === "string") {
            var propertyAry = iteratee.split(".")
            if (Array.isArray(collection)) {
                for (var i = 0; i < collection.length; i++) {
                    var target = collection[i]
                    for (var j = 0; j < propertyAry.length; j++) {
                        target = target[propertyAry[j]]
                    }
                    resultAry.push(target)
                }
            }
        }

        return resultAry
    }

    function property(path) {
        if (typeof path === "string") {
            var pathAry = path.split(".")
            return function (it, idx, ary) {
                var propertyResult = it
                for (var i = 0; i < pathAry.length; i++) {
                    propertyResult = propertyResult[pathAry[i]]
                }
                return propertyResult
            }
        } else if (Array.isArray(path)) {
            var pathAry = path.slice()
            return function (it, idx, ary) {
                var propertyResult = it
                for (var i = 0; i < pathAry.length; i++) {
                    propertyResult = it[pathAry[i]]
                }
                return propertyResult
            }
        }
    }

    return {
        chunk,
        compact,
        concat,
        difference,
        drop,
        dropRight,
        fill,
        flatten,
        flattenDeep,
        flattenDepth,
        fromPairs,
        head,
        indexOf,
        initial,
        intersection,
        join,
        last,
        lastIndexOf,
        nth,
        pull,
        pullAll,
        pullAt,
        reverse,
        slice,
        sortedIndex,
        sortedIndexOf,
        sortedLastIndex,
        sortedLastIndexOf,
        sortedUniq,
        sortedUniqBy,
        tail,
        take,
        takeRight,
        union,
        uniq,
        unzip,
        without,
        zip,
        countBy,
        max,
        map,
        property,
    }
}()
