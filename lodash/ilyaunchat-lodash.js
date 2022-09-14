var ilyaunchat = {
    difference: function (array, values) {
        var resultAry = []
        var map = {}

        for (var i = 0; i < values.length; i++) {
            if (!(values[i] in map)) {
                map[values[i]] = 1
            } else {
                map[values[i]]++
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
