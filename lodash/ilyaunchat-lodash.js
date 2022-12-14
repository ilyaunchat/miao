var ilyaunchat = function () {
    function chunk(array, size = 1) {
        let resultAry = []
        let itemAry = []
        let count = 0

        for (let i = 0; i < array.length; i++) {
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
        let resultAry = []
        let level = 1

        function innerFlat(array) {
            for (let i = 0; i < array.length; i++) {
                if (!(Array.isArray(array[i]))) {
                    resultAry.push(array[i])
                } else if ((Array.isArray(array[i])) && (level <= depth)) {
                    level++
                    innerFlat(array[i])
                    level--
                } else if ((Array.isArray(array[i])) && (level > depth)) {
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
        let standardAry = cloneDeep(values)
        let left = 0
        let right = array.length - 1
        while (left <= right) {
            if (standardAry.indexOf(array[left]) === -1) {
                left++
            } else if (standardAry.indexOf(array[left]) >= 0) {
                for (let i = left; i < right; i++) {
                    array[i] = array[i + 1]
                }
                right--
            }
        }
        let count = array.length - (right + 1)
        while (count > 0) {
            array.pop()
            count--
        }
        return array
    }

    function pullAll(array, values) {
        let standardAry = cloneDeep(values)
        let left = 0
        let right = array.length - 1
        while (left <= right) {
            if (standardAry.indexOf(array[left]) === -1) {
                left++
            } else if (standardAry.indexOf(array[left]) >= 0) {
                for (let i = left; i < right; i++) {
                    array[i] = array[i + 1]
                }
                right--
            }
        }
        let count = array.length - (right + 1)
        while (count > 0) {
            array.pop()
            count--
        }
        return array
    }

    function pullAt(array, indexes) {
        let standardAry = indexes
        let resultAry = []
        let diff = 0
        let left = 0
        let right = array.length - 1
        while (left < array.length) {
            if (standardAry.indexOf(left + diff) === -1) {
                left++
            } else if ((standardAry.indexOf(left + diff) >= 0) && ((left + diff) < array.length)) {
                resultAry.push(array[left])
                for (let i = left; i < right; i++) {
                    array[i] = array[i + 1]
                }
                right--
                diff++
            } else if ((standardAry.indexOf(left + diff) >= 0) && ((left + diff) >= array.length)) {
                left++
            }
        }
        let count = array.length - (right + 1)
        while (count > 0) {
            array.pop()
            count--
        }
        if (resultAry.length < indexes.length) {
            for (let i = resultAry.length; i < indexes.length; i++) {
                resultAry[i] = undefined
            }
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
        const regex = /(\w)+/gm
        var m
        var resultAry = []

        while ((m = regex.exec(value)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++
            }

            m.forEach((match, groupIndex) => {
                if (groupIndex === 0) {
                    resultAry.push(match)
                }
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
        const copyMap = new Map()

        function innerClone(value) {
            if (value && typeof value === "object") {
                if (Object.prototype.toString.call(value) === "[object RegExp]") {
                    return new RegExp(value)
                }

                if (Object.prototype.toString.call(value) === "[object Date]") {
                    return new Date(value)
                }

                if (copyMap.has(value)) {
                    return copyMap.get(value)
                } else {
                    const result = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value))
                    copyMap.set(value, result)

                    for (const key in value) {
                        if (Object.hasOwn(value, key)) {
                            result[key] = innerClone(value[key])
                        }
                    }

                    return result
                }
            } else {
                return value
            }
        }

        return innerClone(value)
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

    function stringifyJSON(obj) {
        if (Array.isArray(obj)) {
            var str = "["
            for (var i = 0; i < obj.length; i++) {
                if (i === obj.length - 1) {
                    if (typeof obj[i] === "number" || typeof obj[i] === "boolean") {
                        str += String(obj[i])
                    } else if (typeof obj[i] === "string") {
                        str += `"` + String(obj[i]) + `"`
                    } else if (Array.isArray(obj[i])) {
                        str += stringifyJSON(obj[i])
                    } else if (typeof obj[i] === "object") {
                        str += stringifyJSON(obj[i])
                    }
                    str += "]"
                } else if (i < obj.length - 1) {
                    if (typeof obj[i] === "number" || typeof obj[i] === "boolean") {
                        str += String(obj[i])
                    } else if (typeof obj[i] === "string") {
                        str += `"` + String(obj[i]) + `"`
                    } else if (Array.isArray(obj[i])) {
                        str += stringifyJSON(obj[i])
                    } else if (typeof obj[i] === "object") {
                        str += stringifyJSON(obj[i])
                    }
                    str += ","
                }
            }
            return str
        } else if (obj && typeof obj === "object") {
            var str = "{"
            var keys = Object.keys(obj)
            for (var i = 0; i < keys.length; i++) {
                if (i === keys.length - 1) {
                    str += `"` + String(keys[i]) + `"` + `:`
                    if (typeof obj[keys[i]] === "number" || typeof obj[keys[i]] === "boolean") {
                        str += String(obj[keys[i]])
                    } else if (typeof obj[keys[i]] === "string") {
                        str += `"` + String(obj[keys[i]]) + `"`
                    } else if (Array.isArray(obj[keys[i]])) {
                        str += stringifyJSON(obj[keys[i]])
                    } else if (typeof obj[keys[i]] === "object") {
                        str += stringifyJSON(obj[keys[i]])
                    }
                    str += "}"
                } else if (i < keys.length - 1) {
                    str += `"` + String(keys[i]) + `"` + `:`
                    if (typeof obj[keys[i]] === "number" || typeof obj[keys[i]] === "boolean") {
                        str += String(obj[keys[i]])
                    } else if (typeof obj[keys[i]] === "string") {
                        str += `"` + String(obj[keys[i]]) + `"`
                    } else if (Array.isArray(obj[keys[i]])) {
                        str += stringifyJSON(obj[keys[i]])
                    } else if (typeof obj[keys[i]] === "object") {
                        str += stringifyJSON(obj[keys[i]])
                    }
                    str += ","
                }
            }
            return str
        } else if (!(obj) && typeof obj === "object") {
            str = "null"
            return str
        }
    }

    function pad(string = "", length = 0, chars = ' ') {
        var originalLen = string.length
        if (originalLen >= length) {
            return string
        } else if (originalLen < length) {
            var leftPadLen = Math.floor((length - originalLen) / 2)
            var rightPadLen = (length - originalLen) - leftPadLen
            var resultStr = ""
            for (var i = 0; i < leftPadLen; i++) {
                resultStr += chars[(i % chars.length)]
            }
            resultStr += string
            for (var i = 0; i < rightPadLen; i++) {
                resultStr += chars[(i % chars.length)]
            }
            return resultStr
        }
    }

    function subtract(minuend, subtrahend) {
        return minuend - subtrahend
    }

    function multiply(multiplier, multiplicand) {
        return multiplier * multiplicand
    }

    function divide(dividend, divisor) {
        return dividend / divisor
    }

    function at(object, paths) {
        var resultAry = []
        if (typeof paths === "string") {
            resultAry.push(property(paths)(object))
        } else if (Array.isArray(paths)) {
            paths.forEach((it) => {
                resultAry.push(property(it)(object))
            })
        }
        return resultAry
    }

    function every(collection, predicate = identity) {
        if (Array.isArray(collection)) {
            if (typeof predicate === "function") {
                for (var idx in collection) {
                    if (!(predicate(collection[idx], idx, collection))) {
                        return false
                    }
                }
                return true
            } else if (Array.isArray(predicate)) {
                for (var it of collection) {
                    if (!(matchesProperty(predicate[0], predicate[1])(it))) {
                        return false
                    }
                }
                return true
            } else if (typeof predicate === "object") {
                for (var it of collection) {
                    if (!(matches(predicate)(it))) {
                        return false
                    }
                }
                return true
            } else if (typeof predicate === "string") {
                for (var it of collection) {
                    if (!(property(predicate)(it))) {
                        return false
                    }
                }
                return true
            }
        }
    }

    function some(collection, predicate = identity) {
        if (Array.isArray(collection)) {
            if (typeof predicate === "function") {
                for (var idx in collection) {
                    if (predicate(collection[idx], idx, collection)) {
                        return true
                    }
                }
                return false
            } else if (Array.isArray(predicate)) {
                for (var it of collection) {
                    if (matchesProperty(predicate[0], predicate[1])(it)) {
                        return true
                    }
                }
                return false
            } else if (typeof predicate === "object") {
                for (var it of collection) {
                    if (matches(predicate)(it)) {
                        return true
                    }
                }
                return false
            } else if (typeof predicate === "string") {
                for (var it of collection) {
                    if (property(predicate)(it)) {
                        return true
                    }
                }
                return false
            }
        }
    }

    function sum(array) {
        var result = array.reduce((prev, curr) => {
            return prev + curr
        })
        return result
    }

    function sumBy(array, iteratee = identity) {
        if (typeof iteratee === "function") {
            var result = array.reduce((prev, curr) => {
                return prev + iteratee(curr)
            }, 0)
            return result
        } else if (typeof iteratee === "string") {
            var result = array.reduce((prev, curr) => {
                return prev + property(iteratee)(curr)
            }, 0)
            return result
        }
    }

    function clamp(number, ...bounds) {
        if (bounds.length === 1) {
            var upper = bounds[0]
            if (number <= upper) {
                return number
            } else if (number > upper) {
                return upper
            }
        } else if (bounds.length > 1) {
            var lower = bounds[0]
            var upper = bounds[1]
            if (lower <= number && number <= upper) {
                return number
            } else if (number < lower) {
                return lower
            } else if (upper < number) {
                return upper
            }
        }
    }

    function inRange(number, ...bounds) {
        if (bounds.length === 1) {
            let start = 0
            let end = bounds[0]
            if (start > end) {
                let temp = start
                start = end
                end = temp
            }
            if (start <= number && number < end) {
                return true
            } else {
                return false
            }
        } else if (bounds.length > 1) {
            let start = bounds[0]
            let end = bounds[1]
            if (start > end) {
                let temp = start
                start = end
                end = temp
            }
            if (start <= number && number < end) {
                return true
            } else {
                return false
            }
        }
    }

    function maxBy(array, iteratee = identity) {
        if (typeof iteratee === "function") {
            let maxIndex = 0
            array.forEach((it, idx, ary) => {
                if (iteratee(it) > iteratee(ary[maxIndex])) {
                    maxIndex = idx
                }
            })
            return array[maxIndex]
        } else if (typeof iteratee === "string") {
            let maxIndex = 0
            array.forEach((it, idx, ary) => {
                if (property(iteratee)(it) > property(iteratee)(ary[maxIndex])) {
                    maxIndex = idx
                }
            })
            return array[maxIndex]
        }
    }

    function find(collection, predicate = identity, fromIndex = 0) {
        if (typeof predicate === "function") {
            for (var i = fromIndex; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    return collection[i]
                }
            }
        } else if (Array.isArray(predicate)) {
            for (var i = fromIndex; i < collection.length; i++) {
                if (matchesProperty(predicate[0], predicate[1])(collection[i])) {
                    return collection[i]
                }
            }
        } else if (typeof predicate === "object") {
            for (var i = fromIndex; i < collection.length; i++) {
                if (matches(predicate)(collection[i])) {
                    return collection[i]
                }
            }
        } else if (typeof predicate === "string") {
            for (var i = fromIndex; i < collection.length; i++) {
                if (property(predicate)(collection[i])) {
                    return collection[i]
                }
            }
        }
    }

    function findLast(collection, predicate = identity, fromIndex = collection.length - 1) {
        if (typeof predicate === "function") {
            for (var i = fromIndex; i >= 0; i--) {
                if (predicate(collection[i])) {
                    return collection[i]
                }
            }
        }
    }

    function flatMap(collection, iteratee = identity) {
        var resultAry = []
        collection.forEach((it, idx, ary) => {
            resultAry.push(iteratee(it, idx, ary))
        })
        resultAry = flatten(resultAry)
        return resultAry
    }

    function flatMapDeep(collection, iteratee = identity) {
        var resultAry = []
        collection.forEach((it, idx, ary) => {
            resultAry.push(iteratee(it, idx, ary))
        })
        resultAry = flattenDeep(resultAry)
        return resultAry
    }

    function flatMapDepth(collection, iteratee = identity, depth = 1) {
        var resultAry = []
        collection.forEach((it, idx, ary) => {
            resultAry.push(iteratee(it, idx, ary))
        })
        resultAry = flattenDepth(resultAry, depth)
        return resultAry
    }

    function filter(collection, predicate = identity) {
        let resultAry = []
        collection.forEach((it, idx, ary) => {
            if (iteratee(predicate)(it, idx, ary)) {
                resultAry.push(it)
            }
        })
        return resultAry
    }

    function groupBy(collection, iteratee = identity) {
        if (typeof iteratee === "function") {
            let resultObj = {}
            collection.forEach(element => {
                if (!(String(iteratee(element)) in resultObj)) {
                    resultObj[String(iteratee(element))] = [element]
                } else if (String(iteratee(element)) in resultObj) {
                    resultObj[String(iteratee(element))].push(element)
                }
            })
            return resultObj
        } else if (typeof iteratee === "string") {
            let resultObj = {}
            collection.forEach(element => {
                if (!(String(property(iteratee)(element)) in resultObj)) {
                    resultObj[String(property(iteratee)(element))] = [element]
                } else if (String(property(iteratee)(element)) in resultObj) {
                    resultObj[String(property(iteratee)(element))].push(element)
                }
            })
            return resultObj
        }
    }

    function includes(collection, value, fromIndex = 0) {
        if (Array.isArray(collection)) {
            if (fromIndex >= 0) {
                let targetIdx = fromIndex
                for (let i = targetIdx; i < collection.length; i++) {
                    if (collection[targetIdx] === value) {
                        return true
                    }
                }
                return false
            } else if (fromIndex < 0) {
                let targetIdx = collection.length + fromIndex
                for (let i = targetIdx; i < collection.length; i++) {
                    if (collection[targetIdx] === value) {
                        return true
                    }
                }
                return false
            }
        } else if (collection && typeof collection === "object") {
            return includes(Object.values(collection), value, fromIndex)
        } else if (typeof collection === "string") {
            let flag = false
            let pt1 = (fromIndex >= 0) ? fromIndex : (collection.length + fromIndex)
            let pt2 = 0
            while ((pt1 < collection.length) && (pt2 < value.length)) {
                if (flag === false) {
                    if (collection[pt1] !== value[pt2]) {
                        pt1++
                    } else if (collection[pt1] === value[pt2]) {
                        flag = true
                        pt1++
                        pt2++
                    }
                } else if (flag === true) {
                    if (collection[pt1] !== value[pt2]) {
                        flag = false
                        pt2 = 0
                    } else if (collection[pt1] === value[pt2]) {
                        pt1++
                        pt2++
                    }
                }
            }
            if (pt2 === value.length) {
                return true
            } else {
                return false
            }
        }
    }

    function invokeMap(collection, path, args) {
        if (Array.isArray(collection)) {
            let resultAry = []
            collection.forEach(element => {
                let it = cloneDeep(element)
                if (typeof path === "string") {
                    resultAry.push(it[path](args))
                } else if (typeof path === "function") {
                    resultAry.push(path.call(element, args))
                }
            })
            return resultAry
        }
    }

    function keyBy(collection, iteratee = identity) {
        let resultObj = {}
        if (Array.isArray(collection)) {
            collection.forEach(element => {
                if (typeof iteratee === "function") {
                    resultObj[iteratee(element)] = element
                } else if (typeof iteratee === "string") {
                    resultObj[property(iteratee)(element)] = element
                }
            })
            return resultObj
        }
    }

    function partition(collection, predicate = identity) {
        let truthyAry = []
        let falsyAry = []
        let resultAry = [truthyAry, falsyAry]
        collection.forEach(element => {
            if (typeof predicate === "function") {
                if (predicate(element)) {
                    truthyAry.push(element)
                } else {
                    falsyAry.push(element)
                }
            } else if (Array.isArray(predicate)) {
                if (matchesProperty(predicate[0], predicate[1])(element)) {
                    truthyAry.push(element)
                } else {
                    falsyAry.push(element)
                }
            } else if (typeof predicate === "object") {
                if (matches(predicate)(element)) {
                    truthyAry.push(element)
                } else {
                    falsyAry.push(element)
                }
            } else if (typeof predicate === "string") {
                if (property(predicate)(element)) {
                    truthyAry.push(element)
                } else {
                    falsyAry.push(element)
                }
            }
        })
        return resultAry
    }

    function reject(collection, predicate = identity) {
        if (Array.isArray(collection)) {
            let resultAry = []
            collection.forEach((element, index, array) => {
                if (typeof predicate === "function") {
                    if (!predicate(element, index, array)) {
                        resultAry.push(element)
                    }
                } else if (Array.isArray(predicate)) {
                    if (!(matchesProperty(predicate[0], predicate[1])(element, index, array))) {
                        resultAry.push(element)
                    }
                } else if (typeof predicate === "object") {
                    if (!(matches(predicate)(element, index, array))) {
                        resultAry.push(element)
                    }
                } else if (typeof predicate === "string") {
                    if (!(property(predicate)(element, index, array))) {
                        resultAry.push(element)
                    }
                }
            })
            return resultAry
        }
    }

    function isNumber(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Number.prototype)
        }
    }

    function isFunction(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Function.prototype)
        }
    }

    function isBoolean(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Boolean.prototype)
        }
    }

    function castArray(value) {
        if (arguments.length === 0) {
            return []
        } else if (arguments.length > 0) {
            if (Array.isArray(value)) {
                return value
            } else if (!(Array.isArray(value))) {
                return [value]
            }
        }
    }

    function isRegExp(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === RegExp.prototype)
        }
    }

    function isDate(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Date.prototype)
        }
    }

    function isNull(value) {
        return (!(value) && typeof value === "object")
    }

    function isFinite(value) {
        return Number.isFinite(value)
    }

    function isSymbol(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Symbol.prototype)
        }
    }

    function isSet(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Set.prototype)
        }
    }

    function isMap(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Map.prototype)
        }
    }

    function conformsTo(object, source) {
        let result = true
        for (let key of Object.keys(source)) {
            if (!(source[key](object[key]))) {
                return false
            }
        }
        return result
    }

    function conforms(source) {
        return function (element, index, ary) {
            for (let key of Object.keys(source)) {
                if (!(source[key](element[key]))) {
                    return false
                }
            }
            return true
        }
    }

    function isElement(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === HTMLBodyElement.prototype)
        }
    }

    function isArray(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Array.prototype)
        }
    }

    function noop() {
        return undefined
    }

    function isError(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === Error.prototype)
        }
    }

    function sortBy(collection, iteratees = identity) {
        let array = cloneDeep(collection)
        if (typeof iteratees === "function") {
            array.sort(function (a, b) {
                if (iteratees(a) < iteratees(b)) {
                    return -1
                } else if (iteratees(a) > iteratees(b)) {
                    return 1
                } else {
                    return 0
                }
            })
        } else if (Array.isArray(iteratees)) {
            iteratees.forEach(element => {
                if (typeof element === "function") {
                    array.sort(function (a, b) {
                        if (element(a) < element(b)) {
                            return -1
                        } else if (element(a) > element(b)) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                } else if (typeof element === "string") {
                    array.sort(function (a, b) {
                        if (property(element)(a) < property(element)(b)) {
                            return -1
                        } else if (property(element)(a) > property(element)(b)) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                }
            })
        }
        return array
    }

    function isNaN(value) {
        if (typeof value === "number") {
            return (value !== value)
        } else if ((typeof value === "object") && (value)) {
            return ((Object.getPrototypeOf(value) === Number.prototype) && (value.toString() === "NaN"))
        } else {
            return false
        }
    }

    function forEach(collection, iteratee = identity) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                iteratee(collection[i], i, collection)
            }
        } else if (typeof collection === "object") {
            for (let key of Object.keys(collection)) {
                iteratee(collection[key], key, collection)
            }
        }
        return collection
    }

    function forEachRight(collection, iteratee = identity) {
        if (Array.isArray(collection)) {
            for (let i = collection.length - 1; i >= 0; i--) {
                iteratee(collection[i], i, collection)
            }
        } else if (typeof collection === "object") {
            for (let key of Object.keys(collection).reverse()) {
                iteratee(collection[key], key, collection)
            }
        }
        return collection
    }

    function reduce(collection, iteratee = identity, accumulator) {
        if (Array.isArray(collection)) {
            if (accumulator === undefined) {
                accumulator = collection[0]
                collection.slice(1).forEach((value, index, collection) => {
                    accumulator = iteratee(accumulator, value, index, collection)
                })
            } else {
                collection.forEach((value, index, collection) => {
                    accumulator = iteratee(accumulator, value, index, collection)
                })
            }
        } else if (typeof collection === "object") {
            (Object.entries(collection)).forEach((value, key, collection) => {
                accumulator = iteratee(accumulator, value[1], value[0], collection)
            })
        }
        return accumulator
    }

    function reduceRight(collection, iteratee = identity, accumulator) {
        if (Array.isArray(collection)) {
            if (accumulator === undefined) {
                accumulator = collection[0]
                collection.reverse().slice(1).forEach((value, index, collection) => {
                    accumulator = iteratee(accumulator, value, index, collection)
                })
            } else {
                collection.reverse().forEach((value, index, collection) => {
                    accumulator = iteratee(accumulator, value, index, collection)
                })
            }
        } else if (typeof collection === "object") {
            (Object.entries(collection).reverse()).forEach((value, key, collection) => {
                accumulator = iteratee(accumulator, value[1], value[0], collection)
            })
        }
        return accumulator
    }

    function isObject(value) {
        if (typeof value === "undefined") {
            return false
        }
        if (!(value) && typeof value === "object") {
            return false
        }
        if (Object.getPrototypeOf(value) === Number.prototype) {
            return false
        }
        if (Object.getPrototypeOf(value) === String.prototype) {
            return false
        }
        if (Object.getPrototypeOf(value) === Boolean.prototype) {
            return false
        }
        if (Object.getPrototypeOf(value) === Symbol.prototype) {
            return false
        }
        if (Object.getPrototypeOf(value) === BigInt.prototype) {
            return false
        }
        return true
    }

    function isSafeInteger(value) {
        return Number.isSafeInteger(value)
    }

    function isString(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else {
            return (Object.getPrototypeOf(value) === String.prototype)
        }
    }

    function isObjectLike(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "object") {
            return true
        } else {
            return false
        }
    }

    function isPlainObject(value) {
        if (!(value) && typeof value === "object") {
            return false
        } else if (typeof value === "undefined") {
            return false
        } else if ((Object.getPrototypeOf(value) === null) || (Object.getPrototypeOf(value) === Object.prototype)) {
            return true
        } else {
            return false
        }
    }

    function ceil(number, precision = 0) {
        let num = number
        if (precision === 0) {
            return Math.ceil(num)
        } else {
            num = num * (10 ** precision)
            num = Math.ceil(num)
            num = num / (10 ** precision)
            return num
        }
    }

    function toArray(value) {
        if (!(value) && typeof value === "object") {
            return []
        } else if (typeof value === "undefined") {
            return []
        } else {
            return Object.values(value)
        }
    }

    function floor(number, precision = 0) {
        let num = number
        if (precision === 0) {
            return Math.floor(num)
        } else {
            num = num * (10 ** precision)
            num = Math.floor(num)
            num = num / (10 ** precision)
            return num
        }
    }

    function meanBy(array, iteratee = identity) {
        let sum = 0
        let length = 0
        array.forEach((element) => {
            if (typeof iteratee === "function") {
                sum += iteratee(element)
                length++
            } else if (typeof iteratee === "string") {
                sum += property(iteratee)(element)
                length++
            }
        })
        return sum / length
    }

    function minBy(array, iteratee = identity) {
        if (typeof iteratee === "function") {
            let minIndex = 0
            array.forEach((it, idx, ary) => {
                if (iteratee(it) < iteratee(ary[minIndex])) {
                    minIndex = idx
                }
            })
            return array[minIndex]
        } else if (typeof iteratee === "string") {
            let minIndex = 0
            array.forEach((it, idx, ary) => {
                if (property(iteratee)(it) < property(iteratee)(ary[minIndex])) {
                    minIndex = idx
                }
            })
            return array[minIndex]
        }
    }

    function forIn(object, iteratee = identity) {
        let obj = object
        while (obj && (Object.getPrototypeOf(obj) !== null)) {
            for (let key of Object.keys(obj)) {
                iteratee(obj[key], key, obj)
            }
            obj = Object.getPrototypeOf(obj)
        }
        return object
    }

    function forOwn(object, iteratee = identity) {
        let obj = object
        if (obj) {
            for (let key of Object.keys(obj)) {
                iteratee(obj[key], key, obj)
            }
        }
        return object
    }

    function forOwnRight(object, iteratee = identity) {
        let obj = object
        if (obj) {
            for (let key of Object.keys(obj).reverse()) {
                iteratee(obj[key], key, obj)
            }
        }
        return object
    }

    function forInRight(object, iteratee = identity) {
        let obj = object
        function traverse(hashTable) {
            if (!hashTable) {
                return
            }
            traverse(Object.getPrototypeOf(hashTable))
            for (let key of Object.keys(hashTable).reverse()) {
                iteratee(hashTable[key], key, hashTable)
            }
        }
        traverse(obj)
        return object
    }

    function functions(object) {
        if (!(object) && typeof value === "object") {
            return []
        } else if (typeof object === "undefined") {
            return []
        } else {
            let result = []
            for (let key of Object.keys(object)) {
                if (typeof object[key] === "function") {
                    result.push(key)
                }
            }
            return result
        }
    }

    function functionsIn(object) {
        if (!(object) && typeof value === "object") {
            return []
        } else if (typeof object === "undefined") {
            return []
        } else {
            let obj = object
            let result = []
            while (obj && (Object.getPrototypeOf(obj) !== null)) {
                for (let key of Object.keys(obj)) {
                    if (typeof obj[key] === "function") {
                        result.push(key)
                    }
                }
                obj = Object.getPrototypeOf(obj)
            }
            return result
        }
    }

    function get(object, path, defaultValue) {
        if (typeof path === "string") {
            let pathAry = toPath(path)
            let result = object
            for (let i = 0; i < pathAry.length; i++) {
                if (result === undefined) {
                    return defaultValue
                }
                result = result[pathAry[i]]
            }
            return result
        } else if (Array.isArray(path)) {
            let pathAry = path
            let result = object
            for (let i = 0; i < pathAry.length; i++) {
                if (result === undefined) {
                    return defaultValue
                }
                result = result[pathAry[i]]
            }
            return result
        }
    }

    function orderBy(collection, iteratees = identity, orders) {
        let array = cloneDeep(collection)
        if (Array.isArray(iteratees)) {
            let reversedIteratees = cloneDeep(iteratees).reverse()
            let reversedOrders = cloneDeep(orders).reverse()
            reversedIteratees.forEach((element, index) => {
                if (typeof element === "string") {
                    if (reversedOrders[index] === "desc") {
                        array.sort(function (a, b) {
                            if (property(element)(a) < property(element)(b)) {
                                return 1
                            } else if (property(element)(a) > property(element)(b)) {
                                return -1
                            } else {
                                return 0
                            }
                        })
                    } else if (reversedOrders[index] === "asc") {
                        array.sort(function (a, b) {
                            if (property(element)(a) < property(element)(b)) {
                                return -1
                            } else if (property(element)(a) > property(element)(b)) {
                                return 1
                            } else {
                                return 0
                            }
                        })
                    }
                }
            })
        }
        return array
    }

    function defaults(object, ...sources) {
        let destination = object
        sources.forEach((element) => {
            let obj = element
            while (obj && typeof obj === "object") {
                Object.keys(obj).forEach((key) => {
                    if (!(Object.prototype.hasOwnProperty.call(destination, key))) {
                        destination[key] = obj[key]
                    }
                })
                obj = Object.getPrototypeOf(obj)
            }
        })
        return destination
    }

    function defaultsDeep(object, ...sources) {
        let destination = object
        sources.forEach((element) => {
            let obj = element
            while (obj && typeof obj === "object") {
                Object.keys(obj).forEach((key) => {
                    if (obj[key] && typeof (obj[key]) === "object") {
                        defaultsDeep(destination[key], obj[key])
                    } else if (!(Object.prototype.hasOwnProperty.call(destination, key))) {
                        destination[key] = obj[key]
                    }
                })
                obj = Object.getPrototypeOf(obj)
            }
        })
        return destination
    }

    function findKey(object, predicate = identity) {
        let resultKey = undefined
        for (let key of Object.keys(object)) {
            if (typeof predicate === "function") {
                if (predicate(object[key])) {
                    resultKey = key
                    break
                }
            } else if (Array.isArray(predicate)) {
                if (matchesProperty(predicate[0], predicate[1])(object[key])) {
                    resultKey = key
                    break
                }
            } else if (Object.prototype.toString.call(predicate) === "[object Object]") {
                if (matches(predicate)(object[key])) {
                    resultKey = key
                    break
                }
            } else if (typeof predicate === "string") {
                if (property(predicate)(object[key])) {
                    resultKey = key
                    break
                }
            }
        }
        return resultKey
    }

    function findLastKey(object, predicate = identity) {
        let resultKey = undefined
        for (let key of Object.keys(object).reverse()) {
            if (typeof predicate === "function") {
                if (predicate(object[key])) {
                    resultKey = key
                    break
                }
            } else if (Array.isArray(predicate)) {
                if (matchesProperty(predicate[0], predicate[1])(object[key])) {
                    resultKey = key
                    break
                }
            } else if (Object.prototype.toString.call(predicate) === "[object Object]") {
                if (matches(predicate)(object[key])) {
                    resultKey = key
                    break
                }
            } else if (typeof predicate === "string") {
                if (property(predicate)(object[key])) {
                    resultKey = key
                    break
                }
            }
        }
        return resultKey
    }

    function set(object, path, value) {
        let target = object
        if (Array.isArray(path)) {
            for (let i = 0; i < path.length; i++) {
                if (i === path.length - 1) {
                    target[path[i]] = value
                } else if (i < path.length - 1) {
                    if (target[path[i]] !== undefined) {
                        target = target[path[i]]
                    } else if (target[path[i]] === undefined) {
                        if (Number.isNaN(Number(path[i + 1]))) {
                            target[path[i]] = {}
                            target = target[path[i]]
                        } else {
                            target[path[i]] = []
                            target = target[path[i]]
                        }
                    }
                }
            }
        } else if (typeof path === "string") {
            let pathAry = toPath(path)
            for (let i = 0; i < pathAry.length; i++) {
                if (i === pathAry.length - 1) {
                    target[pathAry[i]] = value
                } else if (i < pathAry.length - 1) {
                    if (target[pathAry[i]] !== undefined) {
                        target = target[pathAry[i]]
                    } else if (target[pathAry[i]] === undefined) {
                        if (Number.isNaN(Number(pathAry[i + 1]))) {
                            target[pathAry[i]] = {}
                            target = target[pathAry[i]]
                        } else {
                            target[pathAry[i]] = []
                            target = target[pathAry[i]]
                        }
                    }
                }
            }
        }
        return object
    }

    function result(object, path, defaultValue) {
        let target = object
        if (Array.isArray(path)) {
            for (let i = 0; i < path.length; i++) {
                if (target[path[i]] === undefined) {
                    if (typeof defaultValue === "function") {
                        return defaultValue.call(target)
                    } else {
                        return defaultValue
                    }
                } else {
                    if (typeof target[path[i]] === "function") {
                        target = target[path[i]].call(target)
                    } else {
                        target = target[path[i]]
                    }
                }
            }
            return target
        } else if (typeof path === "string") {
            let pathAry = toPath(path)
            for (let i = 0; i < pathAry.length; i++) {
                if (target[pathAry[i]] === undefined) {
                    if (typeof defaultValue === "function") {
                        return defaultValue.call(target)
                    } else {
                        return defaultValue
                    }
                } else {
                    if (typeof target[pathAry[i]] === "function") {
                        target = target[pathAry[i]].call(target)
                    } else {
                        target = target[pathAry[i]]
                    }
                }
            }
            return target
        }
    }

    function iteratee(func = identity) {
        if (typeof func === "function") {
            return func
        } else if (Array.isArray(func)) {
            return matchesProperty(func[0], func[1])
        } else if (Object.prototype.toString.call(func) === "[object Object]") {
            return matches(func)
        } else if (typeof func === "string") {
            return property(func)
        }
    }

    function isEmpty(value) {
        if (typeof value !== "object") {
            return true
        } else if (Object.prototype.toString.call(value) === "[object Null]") {
            return true
        } else if (typeof value === "object") {
            if (Object.keys(value).length !== 0) {
                return false
            } else {
                return true
            }
        }
    }

    function isEqualWith(value, other, customizer) {
        if (typeof customizer === "undefined") {
            return isEqual(value, other)
        } else if (typeof customizer === "function") {
            if (Array.isArray(value) === true && Array.isArray(other) === true) {
                if (value.length !== other.length) {
                    return false
                } else {
                    for (let i = 0; i < value.length; i++) {
                        if (customizer(value[i], other[i]) === undefined) {
                            if (!isEqual(value[i], other[i])) {
                                return false
                            } else {
                                continue
                            }
                        } else if (customizer(value[i], other[i]) === true) {
                            continue
                        }
                    }
                    return true
                }
            }
        }
    }

    function isInteger(value) {
        return Number.isInteger(value)
    }

    function isLength(value) {
        if (typeof value !== "number") {
            return false
        } else {
            if (!Number.isInteger(value)) {
                return false
            } else {
                if (value >= 0 && value <= (2 ** 53 - 1)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    function isMatch(object, source) {
        for (let key of Object.keys(source)) {
            if (!(isEqual(object[key], source[key]))) {
                return false
            }
        }
        return true
    }

    function shuffle(collection) {
        let copy = collection.slice()
        let n = copy.length
        for (var i = 0; i < n; i++) {
            let targetIndex = Math.floor((Math.random() * (n - i)) + i)
            let temp = copy[targetIndex]
            copy[targetIndex] = copy[i]
            copy[i] = temp
        }
        return copy
    }

    function sampleSize(collection, n = 1) {
        if (Array.isArray(collection)) {
            let shuffledArray = shuffle(collection)
            let resultAry = []
            for (let i = 0; i < n; i++) {
                if (i < shuffledArray.length) {
                    resultAry.push(shuffledArray[i])
                }
            }
            return resultAry
        }
    }

    function round(number, precision = 0) {
        let num = number
        if (precision === 0) {
            return Math.round(num)
        } else {
            num = num * (10 ** precision)
            num = Math.round(num)
            num = num / (10 ** precision)
            return num
        }
    }

    function isNil(value) {
        if (Object.prototype.toString.call(value) === "[object Null]" || Object.prototype.toString.call(value) === "[object Undefined]") {
            return true
        } else {
            return false
        }
    }

    function isArrayLike(value) {
        if (typeof value === "function") {
            return false
        } else {
            if (value.length === undefined) {
                return false
            } else {
                return ((0 <= value.length) && (value.length <= Number.MAX_SAFE_INTEGER))
            }
        }
    }

    function isWeakMap(value) {
        if (isNil(value)) {
            return false
        } else {
            return (Object.getPrototypeOf(value) === WeakMap.prototype)
        }
    }

    function isWeakSet(value) {
        if (isNil(value)) {
            return false
        } else {
            return (Object.getPrototypeOf(value) === WeakSet.prototype)
        }
    }

    function has(object, path) {
        if (Array.isArray(path)) {
            let p = object
            for (let i = 0; i < path.length; i++) {
                if (!(Object.prototype.hasOwnProperty.call(p, path[i]))) {
                    return false
                } else {
                    p = p[path[i]]
                }
            }
            return true
        } else if (typeof path === "string") {
            let pathAry = toPath(path)
            let p = object
            for (let i = 0; i < pathAry.length; i++) {
                if (!(Object.prototype.hasOwnProperty.call(p, pathAry[i]))) {
                    return false
                } else {
                    p = p[path[i]]
                }
            }
            return true
        }
    }

    function invert(object) {
        let resultObj = {}
        for (let [key, value] of Object.entries(object)) {
            resultObj[String(value)] = key
        }
        return resultObj
    }

    function invoke(object, path, ...args) {
        if (Array.isArray(path)) {
            let p = object
            for (let i = 0; i < path.length; i++) {
                if (pathAry[i] in p) {
                    if (i < path.length - 1) {
                        p = p[path[i]]
                    } else if (i === path.length - 1) {
                        return p[path[i]](...args)
                    }
                }
            }
        } else if (typeof path === "string") {
            let pathAry = toPath(path)
            let p = object
            for (let i = 0; i < pathAry.length; i++) {
                if (pathAry[i] in p) {
                    if (i < pathAry.length - 1) {
                        p = p[pathAry[i]]
                    } else if (i === pathAry.length - 1) {
                        return p[pathAry[i]](...args)
                    }
                }
            }
        }
    }

    function keys(object) {
        return Object.keys(object)
    }

    function keysIn(object) {
        let resultAry = []
        for (let key in object) {
            resultAry.push(key)
        }
        return resultAry
    }

    function mapValues(object, predicate = identity) {
        predicate = iteratee.call(undefined, predicate)
        let resultObj = {}
        Object.keys(object).forEach((key) => {
            resultObj[key] = predicate(object[key])
        })
        return resultObj
    }

    function mapKeys(object, predicate = identity) {
        predicate = iteratee(predicate)
        let resultObj = {}
        Object.keys(object).forEach((key) => {
            resultObj[predicate(object[key], key, object)] = object[key]
        })
        return resultObj
    }

    function omit(object, paths) {
        let resultObj = {}
        if (typeof paths === "string") {
            for (let key in object) {
                if (!(key === paths)) {
                    resultObj[key] = object[key]
                }
            }
        } else if (Array.isArray(paths)) {
            for (let key in object) {
                if (!(paths.includes(key))) {
                    resultObj[key] = object[key]
                }
            }
        }
        return resultObj
    }

    function padEnd(string = "", length = 0, chars = ' ') {
        let originalLen = string.length
        if (originalLen >= length) {
            return string
        } else if (originalLen < length) {
            let rightPadLen = length - originalLen
            let resultStr = string
            for (let i = 0; i < rightPadLen; i++) {
                resultStr += chars[(i % chars.length)]
            }
            return resultStr
        }
    }

    function padStart(string = "", length = 0, chars = ' ') {
        let originalLen = string.length
        if (originalLen >= length) {
            return string
        } else if (originalLen < length) {
            let leftPadLen = length - originalLen
            let resultStr = ""
            for (let i = 0; i < leftPadLen; i++) {
                resultStr += chars[(i % chars.length)]
            }
            resultStr += string
            return resultStr
        }
    }

    function values(object) {
        let resultArray = []
        for (let key of Object.keys(object)) {
            resultArray.push(object[key])
        }
        return resultArray
    }

    function range(...args) {
        let resultArray = []
        if (args.length === 1) {
            if (args[0] >= 0) {
                for (let i = 0; i < args[0]; i++) {
                    resultArray.push(i)
                }
            } else if (args[0] < 0) {
                for (let i = 0; i > args[0]; i--) {
                    resultArray.push(i)
                }
            }
        } else if (args.length === 2) {
            for (let i = args[0]; i < args[1]; i++) {
                resultArray.push(i)
            }
        } else if (args.length === 3) {
            if (args[2] === 0) {
                let i = 0
                while (i < (args[1] - args[0])) {
                    i++
                    resultArray.push(args[0])
                }
            } else {
                for (let i = args[0]; (args[2] > 0) ? (i < args[1]) : (i > args[1]); i = i + args[2]) {
                    resultArray.push(i)
                }
            }
        }
        return resultArray
    }

    function pick(object, ...paths) {
        let res = {}

        if (paths.length === 1 && typeof paths[0] === "string") {
            res[paths[0]] = object[paths[0]]
        } else if (paths.length === 1 && Array.isArray(paths[0])) {
            for (let val of paths[0]) {
                res[val] = object[val]
            }
        }

        return res
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
        stringifyJSON,
        pad,
        subtract,
        multiply,
        divide,
        at,
        every,
        some,
        sum,
        sumBy,
        clamp,
        inRange,
        maxBy,
        find,
        findLast,
        flatMap,
        flatMapDeep,
        flatMapDepth,
        filter,
        groupBy,
        includes,
        invokeMap,
        keyBy,
        partition,
        reject,
        isNumber,
        isFunction,
        isBoolean,
        castArray,
        isRegExp,
        isDate,
        isNull,
        isFinite,
        isSymbol,
        isSet,
        isMap,
        conformsTo,
        conforms,
        isElement,
        isArray,
        noop,
        isError,
        sortBy,
        isNaN,
        forEach,
        forEachRight,
        reduce,
        reduceRight,
        isObject,
        isSafeInteger,
        isString,
        isObjectLike,
        isPlainObject,
        ceil,
        toArray,
        floor,
        meanBy,
        minBy,
        forIn,
        forOwn,
        forOwnRight,
        forInRight,
        functions,
        functionsIn,
        get,
        orderBy,
        defaults,
        defaultsDeep,
        findKey,
        findLastKey,
        set,
        result,
        iteratee,
        isEmpty,
        isEqualWith,
        isInteger,
        isLength,
        isMatch,
        shuffle,
        sampleSize,
        round,
        isNil,
        isArrayLike,
        isWeakMap,
        isWeakSet,
        has,
        invert,
        invoke,
        keys,
        keysIn,
        mapValues,
        mapKeys,
        omit,
        padEnd,
        padStart,
        values,
        range,
        pick,
    }
}()
