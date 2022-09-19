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
        var standardAry = cloneDeep(values)
        var count = 0
        var boundary = array.length - count
        for (var i = 0; i < array.length; i++) {
            if ((standardAry.indexOf(array[i]) === -1) && (i < boundary - 1)) {
                continue
            } else if ((standardAry.indexOf(array[i]) === -1) && (i === boundary - 1)) {
                break
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
        var standardAry = cloneDeep(values)
        var count = 0
        var boundary = array.length - count
        for (var i = 0; i < array.length; i++) {
            if ((standardAry.indexOf(array[i]) === -1) && (i < boundary - 1)) {
                continue
            } else if ((standardAry.indexOf(array[i]) === -1) && (i === boundary - 1)) {
                break
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
        var standardAry = cloneDeep(indexes)
        var count = 0
        var boundary = array.length - count
        var resultAry = Array(indexes.length)
        var resultAryIndex = 0
        for (var i = 0; i < array.length; i++) {
            if ((standardAry.indexOf(i + count) === -1) && (i < boundary - 1)) {
                continue
            } else if ((standardAry.indexOf(i + count) === -1) && (i === boundary - 1)) {
                break
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
            resultAry[resultAryIndex] = array.pop()
            resultAryIndex++
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
            var pathAry = toPath(path)
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

    function matches(source) {
        return function (oneObject) {
            for (var key of Object.keys(source)) {
                if (!(key in oneObject)) {
                    return false
                } else if (oneObject[key] !== source[key]) {
                    return false
                }
            }

            return true
        }
    }

    function toPath(value) {
        const regex = /\w/gm
        var m
        var resultAry = []

        while ((m = regex.exec(value)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++
            }

            m.forEach((match) => {
                resultAry.push(match)
            })
        }

        return resultAry
    }

    function matchesProperty(path, srcValue) {
        var pathAry
        if (Array.isArray(path)) {
            pathAry = path.slice()
        } else if (typeof path === "string") {
            pathAry = toPath(path)
        }

        return function (oneObject) {
            var target = oneObject
            for (var i = 0; i < pathAry.length; i++) {
                target = target[pathAry[i]]
                if (target === srcValue) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    function findIndex(array, predicate = identity, fromIndex = 0) {
        if (typeof predicate === "function") {
            for (var i = fromIndex; i < array.length; i++) {
                if (predicate(array[i]) === true) {
                    return i
                }
            }
            return -1
        } else if ((typeof predicate === "object") && (Array.isArray(predicate) === false)) {
            var func = matches(predicate)
            for (var i = fromIndex; i < array.length; i++) {
                if (func(array[i]) === true) {
                    return i
                }
            }
            return -1
        } else if (Array.isArray(predicate) === true) {
            var func = matchesProperty(predicate[0], predicate[1])
            for (var i = fromIndex; i < array.length; i++) {
                if (func(array[i]) === true) {
                    return i
                }
            }
            return -1
        } else if (typeof predicate === "string") {
            for (var i = fromIndex; i < array.length; i++) {
                if (property(predicate)(array[i]) === true) {
                    return i
                }
            }
            return -1
        }
    }

    function findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
        if (typeof predicate === "function") {
            for (var i = fromIndex; i >= 0; i--) {
                if (predicate(array[i]) === true) {
                    return i
                }
            }

            return -1
        } else if ((typeof predicate === "object") && (Array.isArray(predicate) === false)) {
            var func = matches(predicate)
            for (var i = fromIndex; i >= 0; i--) {
                if (func(array[i]) === true) {
                    return i
                }
            }

            return -1
        } else if (Array.isArray(predicate) === true) {
            var func = matchesProperty(predicate[0], predicate[1])
            for (var i = fromIndex; i >= 0; i--) {
                if (func(array[i]) === true) {
                    return i
                }
            }

            return -1
        } else if (typeof predicate === "string") {
            for (var i = fromIndex; i >= 0; i--) {
                if (property(predicate)(array[i]) === true) {
                    return i
                }
            }

            return -1
        }
    }

    function differenceBy(array, ...values) {
        if (values.length === 1) {
            return difference(array, ...values)
        } else if (values.length > 1) {
            if (Array.isArray(values.at(-1))) {
                return difference(array, ...values)
            } else {
                var theLastArg = values.pop()
                var resultAry = []
                if (typeof theLastArg === "function") {
                    var map = {}
                    for (var i = 0; i < values.length; i++) {
                        for (var j = 0; j < values[i].length; j++) {
                            if (!(theLastArg(values[i][j]) in map)) {
                                map[theLastArg(values[i][j])] = 1
                            } else {
                                map[theLastArg(values[i][j])]++
                            }
                        }
                    }
                    for (var i = 0; i < array.length; i++) {
                        var val = ((map[theLastArg(array[i])]) || 0)
                        if (!val) {
                            resultAry.push(array[i])
                        }
                    }
                    return resultAry
                } else if (typeof theLastArg === "string") {
                    var map = {}
                    for (var i = 0; i < values.length; i++) {
                        for (var j = 0; j < values[i].length; j++) {
                            if (!(property(theLastArg)(values[i][j]) in map)) {
                                map[property(theLastArg)(values[i][j])] = 1
                            } else {
                                map[property(theLastArg)(values[i][j])]++
                            }
                        }
                    }
                    for (var i = 0; i < array.length; i++) {
                        var freq = (map[property(theLastArg)(array[i])] || 0)
                        if (!freq) {
                            resultAry.push(array[i])
                        }
                    }
                    return resultAry
                }
            }
        }
    }

    function mean(array) {
        var sum = array.reduce((prev, curr) => {
            return prev + curr
        })
        return sum / array.length
    }

    function eq(value, other) {
        var valA = value
        var valB = other
        if (typeof valA !== typeof valB) {
            return false
        } else {
            if (typeof valA === "number") {
                if ((Number.isNaN(valA)) && (Number.isNaN(valB))) {
                    return true
                } else {
                    return valA === valB
                }
            } else {
                return valA === valB
            }
        }
    }

    function identity(value) {
        return value
    }

    function negate(predicate) {
        return (...args) => {
            return !predicate(...args)
        }
    }

    function min(array) {
        if ((array.length === 0) || (Boolean(array) === false)) {
            return undefined
        }

        var min = Infinity
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }

        return min
    }

    function xor(...arrays) {
        var resultAry = []
        var memoAry = []
        var basicAry = flatten(arrays)

        var smallest = min(basicAry)
        var largest = max(basicAry)

        memoAry = Array(largest - smallest + 1).fill(0)

        for (var i = 0; i < basicAry.length; i++) {
            var indexNeeded = basicAry[i] - smallest
            memoAry[indexNeeded]++
        }

        for (var i = 0; i < basicAry.length; i++) {
            var indexNeeded = basicAry[i] - smallest
            if (memoAry[indexNeeded] === 1) {
                resultAry.push(basicAry[i])
            }
        }

        return resultAry
    }

    function isEqual(value, other) {
        if (value === other) {
            return true
        }

        if (Number.isNaN(value) === true && Number.isNaN(other) === true) {
            return true
        }

        if (Array.isArray(value) === true && Array.isArray(other) === true) {
            if (value.length !== other.length) {
                return false
            } else {
                for (var i = 0; i < value.length; i++) {
                    if (!(isEqual(value[i], other[i]))) {
                        return false
                    }
                }
                return true
            }
        }

        if (value && other && typeof value === "object" && typeof other === "object" && !(Array.isArray(value)) && !(Array.isArray(other))) {
            if (Object.keys(value).length !== Object.keys(other).length) {
                return false
            } else {
                for (var key of Object.keys(value)) {
                    if (!(isEqual(value[key], other[key]))) {
                        return false
                    }
                }
                return true
            }
        }

        return value === other
    }

    function gt(value, other) {
        return (value > other) ? true : false
    }

    function gte(value, other) {
        return (value >= other) ? true : false
    }

    function lt(value, other) {
        return (value < other) ? true : false
    }

    function lte(value, other) {
        return (value <= other) ? true : false
    }

    function constant(value) {
        return function () {
            return value
        }
    }

    function times(n, iteratee = identity) {
        var resultAry = []
        for (var i = 0; i < n; i++) {
            resultAry.push(iteratee(i))
        }
        return resultAry
    }

    function once(func) {
        var times = 0
        var res = 0
        return function (...args) {
            if (times === 0) {
                times++
                res = func(...args)
                return res
            } else {
                return res
            }
        }
    }

    function nthArg(n = 0) {
        return function (...args) {
            if (n >= 0) {
                return args[n]
            } else if (n < 0) {
                return args[args.length + n]
            }
        }
    }

    function clone(value) {
        return value.slice()
    }

    function cloneDeep(value) {
        if (typeof value === "number" || typeof value === "string" || typeof value === "boolean" || typeof value === "undefined" || ((String(value) !== "[object Object]") && (typeof value === "object") && (!(Array.isArray(value)))) || typeof value === "function") {
            var copyVal = value
            return copyVal
        } else if (Array.isArray(value)) {
            var resultAry = []
            for (var i = 0; i < value.length; i++) {
                resultAry.push(cloneDeep(value[i]))
            }
            return resultAry
        } else if (typeof value === "object") {
            var resultObj = {}
            for (var key of Object.keys(value)) {
                resultObj[key] = cloneDeep(value[key])
            }
            return resultObj
        }
    }

    function dropWhile(array, predicate = identity) {

        var resultAry = cloneDeep(array)
        var targetIndexesAry = []

        if (typeof predicate === "function") {
            for (var i = 0; i < resultAry.length; i++) {
                if (predicate(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (predicate(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (typeof predicate === "string") {
            for (var i = 0; i < resultAry.length; i++) {
                if (property(predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (property(predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (Array.isArray(predicate)) {
            for (var i = 0; i < resultAry.length; i++) {
                if (matchesProperty(...predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (matchesProperty(...predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (typeof predicate === "object") {
            for (var i = 0; i < resultAry.length; i++) {
                if (matches(predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (matches(predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        }

    }

    function dropRightWhile(array, predicate = identity) {

        var resultAry = cloneDeep(array)
        var targetIndexesAry = []

        if (typeof predicate === "function") {
            for (var i = resultAry.length - 1; i >= 0; i--) {
                if (predicate(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (predicate(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (typeof predicate === "string") {
            for (var i = resultAry.length - 1; i >= 0; i--) {
                if (property(predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (property(predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (Array.isArray(predicate)) {
            for (var i = resultAry.length - 1; i >= 0; i--) {
                if (matchesProperty(...predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (matchesProperty(...predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        } else if (typeof predicate === "object") {
            for (var i = resultAry.length - 1; i >= 0; i--) {
                if (matches(predicate)(resultAry[i]) === true) {
                    targetIndexesAry.push(i)
                } else if (matches(predicate)(resultAry[i]) === false) {
                    break
                }
            }
            pullAt(resultAry, targetIndexesAry)
            return resultAry
        }

    }

    function differenceWith(array, ...values) {
        if (values.length === 1) {
            return difference(array, ...values)
        } else if (values.length > 1) {
            if (Array.isArray(values.at(-1))) {
                return difference(array, ...values)
            } else {
                var theLastArg = values.pop()
                var resultAry = cloneDeep(array)
                var targetIndexesAry = []
                for (var i = 0; i < array.length; i++) {
                    for (var j = 0; j < values.length; j++) {
                        for (var k = 0; k < (values[j]).length; k++) {
                            if (theLastArg(array[i], values[j][k])) {
                                targetIndexesAry.push(i)
                            }
                        }
                    }
                }
                pullAt(resultAry, targetIndexesAry)
                return resultAry
            }
        }
    }

    function repeat(string = "", n = 1) {
        var resultStr = ""
        for (var i = 1; i <= n; i++) {
            resultStr += string
        }
        return resultStr
    }

    function intersectionBy(...arrays) {
        if (Array.isArray(arrays.at(-1))) {
            return intersection(...arrays)
        } else if (typeof arrays.at(-1) === "function") {
            var copiedArys = cloneDeep(arrays)
            var theLastArg = copiedArys.pop()
            var copiedFirstAry = copiedArys.shift()
            var resultAry = []
            var flag = 1

            for (var i = 0; i < copiedArys.length; i++) {
                for (var j = 0; j < copiedArys[i].length; j++) {
                    copiedArys[i][j] = theLastArg(copiedArys[i][j])
                }
            }
            for (var i = 0; i < copiedFirstAry.length; i++) {
                for (var j = 0; j < copiedArys.length; j++) {
                    if (copiedArys[j].indexOf(theLastArg(copiedFirstAry[i])) === -1) {
                        flag = 0
                        break
                    }
                }
                if (flag === 0) {
                    flag = 1
                } else if (flag === 1) {
                    resultAry.push(copiedFirstAry[i])
                }
            }
            return resultAry
        } else if (typeof arrays.at(-1) === "string") {
            var copiedArys = cloneDeep(arrays)
            var theLastArg = copiedArys.pop()
            var copiedFirstAry = copiedArys.shift()
            var resultAry = []
            var flagInner = 0
            var flagOuter = 0

            for (var i = 0; i < copiedFirstAry.length; i++) {
                for (var j = 0; j < copiedArys.length; j++) {
                    for (var k = 0; k < copiedArys[j].length; k++) {
                        if (property(theLastArg)(copiedFirstAry[i]) && property(theLastArg)(copiedArys[j][k]) && isEqual(property(theLastArg)(copiedFirstAry[i]), property(theLastArg)(copiedArys[j][k]))) {
                            flagInner = 1
                            break
                        }
                    }
                    if (flagInner === 0) {
                        break
                    } else if ((flagInner === 1) && (j < copiedArys.length - 1)) {
                        flagInner = 0
                        continue
                    } else if ((flagInner === 1) && (j === copiedArys.length - 1)) {
                        flagOuter = 1
                        break
                    }
                }
                if (flagOuter === 1) {
                    resultAry.push(copiedFirstAry[i])
                    flagOuter = 0
                    flagInner = 0
                }
            }
            return resultAry
        }
    }

    function sample(collection) {
        var idx = Math.floor(Math.random() * collection.length)
        return collection[idx]
    }

    function intersectionWith(...arrays) {
        if (typeof arrays.at(-1) !== "function") {
            return intersection(...arrays)
        } else {
            var copiedArys = cloneDeep(arrays)
            var theLastArg = copiedArys.pop()
            var copiedFirstAry = copiedArys.shift()
            var resultAry = []
            var flagInner = 0
            var flagOuter = 0

            for (var i = 0; i < copiedFirstAry.length; i++) {
                for (var j = 0; j < copiedArys.length; j++) {
                    for (var k = 0; k < copiedArys[j].length; k++) {
                        if (theLastArg(copiedFirstAry[i], copiedArys[j][k])) {
                            flagInner = 1
                            break
                        }
                    }
                    if (flagInner === 0) {
                        break
                    } else if ((flagInner === 1) && (j < copiedArys.length - 1)) {
                        flagInner = 0
                        continue
                    } else if ((flagInner === 1) && (j === copiedArys.length - 1)) {
                        flagOuter = 1
                        break
                    }
                }
                if (flagOuter === 1) {
                    resultAry.push(copiedFirstAry[i])
                    flagOuter = 0
                    flagInner = 0
                }
            }
            return resultAry
        }
    }

    function pullAllBy(array, values, iteratee = identity) {
        var standardAry = cloneDeep(values)
        var count = 0
        var boundary = array.length - count
        var flag = 0
        if (typeof iteratee === "string") {
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < standardAry.length; j++) {
                    if (property(iteratee)(array[i]) && property(iteratee)(standardAry[j]) && (property(iteratee)(array[i]) === property(iteratee)(standardAry[j]))) {
                        flag = 1
                        break
                    } else {
                        continue
                    }
                }
                if (flag === 1) {
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
                    flag = 0
                } else if ((flag === 0) && (i < (boundary - 1))) {
                    continue
                } else if ((flag === 0) && (i === (boundary - 1))) {
                    break
                }
            }
            while (count > 0) {
                array.pop()
                count--
            }
            return array
        }
    }

    function pullAllWith(array, values, comparator) {
        var standardAry = cloneDeep(values)
        var count = 0
        var boundary = array.length - count
        var flag = 0
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < standardAry.length; j++) {
                if (comparator(array[i], standardAry[j])) {
                    flag = 1
                    break
                } else {
                    continue
                }
            }
            if (flag === 1) {
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
                flag = 0
            } else if ((flag === 0) && (i < (boundary - 1))) {
                continue
            } else if ((flag === 0) && (i === (boundary - 1))) {
                break
            }
            while (count > 0) {
                array.pop()
                count--
            }
            return array
        }
    }

    function sortedIndexBy(array, value, iteratee = identity) {
        if (typeof iteratee === "function") {
            var left = 0
            var right = array.length
            while (left < right) {
                var mid = Math.floor(left + (right - left) / 2)
                if (iteratee(array[mid]) === iteratee(value)) {
                    right = mid
                } else if (iteratee(array[mid]) < iteratee(value)) {
                    left = mid + 1
                } else if (iteratee(array[mid]) > iteratee(value)) {
                    right = mid
                }
            }
            return left
        } else if (typeof iteratee === "string") {
            var left = 0
            var right = array.length
            while (left < right) {
                var mid = Math.floor(left + (right - left) / 2)
                if (property(iteratee)(array[mid]) === property(iteratee)(value)) {
                    right = mid
                } else if (property(iteratee)(array[mid]) < property(iteratee)(value)) {
                    left = mid + 1
                } else if (property(iteratee)(array[mid]) > property(iteratee)(value)) {
                    right = mid
                }
            }
            return left
        }
    }

    function sortedLastIndexBy(array, value, iteratee = identity) {
        if (typeof iteratee === "function") {
            var left = 0
            var right = array.length
            while (left < right) {
                var mid = Math.floor(left + (right - left) / 2)
                if (iteratee(array[mid]) === iteratee(value)) {
                    left = mid + 1
                } else if (iteratee(array[mid]) < iteratee(value)) {
                    left = mid + 1
                } else if (iteratee(array[mid]) > iteratee(value)) {
                    right = mid
                }
            }
            return left
        } else if (typeof iteratee === "string") {
            var left = 0
            var right = array.length
            while (left < right) {
                var mid = Math.floor(left + (right - left) / 2)
                if (property(iteratee)(array[mid]) === property(iteratee)(value)) {
                    left = mid + 1
                } else if (property(iteratee)(array[mid]) < property(iteratee)(value)) {
                    left = mid + 1
                } else if (property(iteratee)(array[mid]) > property(iteratee)(value)) {
                    right = mid
                }
            }
            return left
        }
    }

    function takeWhile(array, predicate = identity) {
        var resultAry = []
        if (typeof predicate === "function") {
            for (var i = 0; i < array.length; i++) {
                if (predicate(array[i])) {
                    resultAry.push(array[i])
                } else {
                    break
                }
            }
        } else if (Array.isArray(predicate)) {
            for (var i = 0; i < array.length; i++) {
                if (matchesProperty(predicate[0], predicate[1])(array[i])) {
                    resultAry.push(array[i])
                } else {
                    break
                }
            }
        } else if (typeof predicate === "object") {
            for (var i = 0; i < array.length; i++) {
                if (matches(predicate)(array[i])) {
                    resultAry.push(array[i])
                } else {
                    break
                }
            }
        } else if (typeof predicate === "string") {
            for (var i = 0; i < array.length; i++) {
                if (property(predicate)(array[i])) {
                    resultAry.push(array[i])
                } else {
                    break
                }
            }
        }
        return resultAry
    }

    function takeRightWhile(array, predicate = identity) {
        var resultAry = []
        if (typeof predicate === "function") {
            for (var i = array.length - 1; i >= 0; i--) {
                if (predicate(array[i])) {
                    resultAry.unshift(array[i])
                } else {
                    break
                }
            }
        } else if (Array.isArray(predicate)) {
            for (var i = array.length - 1; i >= 0; i--) {
                if (matchesProperty(predicate[0], predicate[1])(array[i])) {
                    resultAry.unshift(array[i])
                } else {
                    break
                }
            }
        } else if (typeof predicate === "object") {
            for (var i = array.length - 1; i >= 0; i--) {
                if (matches(predicate)(array[i])) {
                    resultAry.unshift(array[i])
                } else {
                    break
                }
            }
        } else if (typeof predicate === "string") {
            for (var i = array.length - 1; i >= 0; i--) {
                if (property(predicate)(array[i])) {
                    resultAry.unshift(array[i])
                } else {
                    break
                }
            }
        }
        return resultAry
    }

    function unionBy(...arrays) {
        if (Array.isArray(arrays.at(-1))) {
            return union(...arrays)
        } else if (typeof arrays.at(-1) === "function") {
            var theLastArg = arrays.pop()
            var memoAry = []
            var resultAry = []
            var ary = arrays.flat(1)
            for (var i = 0; i < ary.length; i++) {
                if (memoAry.indexOf(theLastArg(ary[i])) === -1) {
                    resultAry.push(ary[i])
                    memoAry.push(theLastArg(ary[i]))
                }
            }
            return resultAry
        } else if (typeof arrays.at(-1) === "string") {
            var theLastArg = arrays.pop()
            var memoAry = []
            var resultAry = []
            var ary = arrays.flat(1)
            for (var i = 0; i < ary.length; i++) {
                if (memoAry.indexOf(property(theLastArg)(ary[i])) === -1) {
                    resultAry.push(ary[i])
                    memoAry.push(property(theLastArg)(ary[i]))
                }
            }
            return resultAry
        }
    }

    function unionWith(...arrays) {
        if (typeof arrays.at(-1) === "function") {
            var theLastArg = arrays.pop()
            var resultAry = arrays.shift()
            var flag = 0
            for (var i = 0; i < arrays.length; i++) {
                for (var j = 0; j < arrays[i].length; j++) {
                    for (var val of resultAry) {
                        if (theLastArg(val, arrays[i][j])) {
                            flag = 1
                            break
                        }
                    }
                    if (flag === 1) {
                        flag = 0
                    } else if (flag === 0) {
                        resultAry.push(arrays[i][j])
                    }
                }
            }
            return resultAry
        }
    }

    function uniqBy(array, iteratee = identity) {
        if (typeof iteratee === "function") {
            var memoAry = []
            var resultAry = []
            for (var i = 0; i < array.length; i++) {
                if (memoAry.indexOf(iteratee(array[i])) === -1) {
                    memoAry.push(iteratee(array[i]))
                    resultAry.push(array[i])
                }
            }
            return resultAry
        } else if (typeof iteratee === "string") {
            var memoAry = []
            var resultAry = []
            for (var i = 0; i < array.length; i++) {
                if (memoAry.indexOf(property(iteratee)(array[i])) === -1) {
                    memoAry.push(property(iteratee)(array[i]))
                    resultAry.push(array[i])
                }
            }
            return resultAry
        }
    }

    function uniqWith(array, comparator) {
        if (typeof comparator === "function") {
            var resultAry = [array[0]]
            var flag = 1
            for (var i = 1; i < array.length; i++) {
                for (var j = 0; j < resultAry.length; j++) {
                    if (comparator(array[i], resultAry[j])) {
                        flag = 0
                        break
                    }
                }
                if (flag === 0) {
                    flag = 1
                } else if (flag === 1) {
                    resultAry.push(array[i])
                    flag = 1
                }
            }
            return resultAry
        }
    }

    function add(augend, addend) {
        return augend + addend
    }

    function isUndefined(value) {
        return (value === undefined)
    }

    function unzipWith(array, iteratee = identity) {
        var resultAry = []
        var k = 0
        for (var i = 0; i < array[0].length; i++) {
            for (var j = 0; j < array.length; j++) {
                k = iteratee(array[j][i], k)
            }
            resultAry.push(k)
            k = 0
        }
        return resultAry
    }

    function zipObject(props = [], values = []) {
        var resultObj = {}
        for (var i = 0; i < props.length; i++) {
            resultObj[props[i]] = values[i]
        }
        return resultObj
    }

    function size(collection) {
        var len = 0
        if (typeof collection === "string") {
            len = collection.length
        } else if (Array.isArray(collection)) {
            len = collection.length
        } else if (typeof collection === "object") {
            len = Object.keys(collection).length
        }
        return len
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
        matches,
        toPath,
        matchesProperty,
        findIndex,
        findLastIndex,
        differenceBy,
        mean,
        eq,
        identity,
        negate,
        min,
        xor,
        isEqual,
        gt,
        gte,
        lt,
        lte,
        constant,
        times,
        once,
        nthArg,
        clone,
        cloneDeep,
        dropWhile,
        dropRightWhile,
        differenceWith,
        repeat,
        intersectionBy,
        sample,
        intersectionWith,
        pullAllBy,
        pullAllWith,
        sortedIndexBy,
        sortedLastIndexBy,
        takeWhile,
        takeRightWhile,
        unionBy,
        unionWith,
        uniqBy,
        uniqWith,
        add,
        isUndefined,
        unzipWith,
        zipObject,
        size,
    }
}()
