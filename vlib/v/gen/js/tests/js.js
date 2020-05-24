// V_COMMIT_HASH 0de70e8
// V_CURRENT_COMMIT_HASH 4271eb4
// Generated by the V compiler

"use strict";

const _CONSTS = Object.freeze({
	/** @type {number} - i_am_a_const */
	i_am_a_const: 	21214,
	/** @type {string} - v_super */
	v_super: "amazing keyword"
});

/** @namespace builtin */
const builtin = (function () {
	/**
	 * @param {any} s
	 * @returns {void}
	 * @function
	*/
	function println(s) {
		console.log(s);
	}
	
	/**
	 * @param {any} s
	 * @returns {void}
	 * @function
	*/
	function print(s) {
		process.stdout.write(s);
	}

	/* module exports */
	return {
		println,
		print,
	};
})();

/** @namespace hello */
const hello = (function () {
	/**
	 * @param {{foo?: string}} values - values for this class fields
	 * @constructor
	*/
	function A({ foo = "" }) {
		this.foo = foo
	};
	A.prototype = {
		/** @type {string} - foo */
		foo: "",
		/**
		 * @param {string} s
		 * @returns {void}
		 * @function
		*/
		update(s) {
			const a = this;
			a.foo = s;
		}
	};

	
	/**
	 * @param {{}} values - values for this class fields
	 * @constructor
	*/
	function B({  }) {
	};
	B.prototype = {
	};

	const C = Object.freeze({
	});
	
	/**
	 * @returns {string}
	 * @function
	*/
	function v_debugger() {
		const v = new B({});
		return "Hello";
	}
	
	/**
	 * @returns {string}
	 * @function
	*/
	function excited() {
		return v_debugger() + "!";
	}

	/* module exports */
	return {
		A,
		C,
		v_debugger,
		excited,
	};
})();

/** @namespace main */
const main = (function (hl) {
	/**
	 * @param {{a?: hl["A"]["prototype"]}} values - values for this class fields
	 * @constructor
	*/
	function Foo({ a = {} }) {
		this.a = a
	};
	Foo.prototype = {
		/** @type {hl["A"]["prototype"]} - a */
		a: {}
	};

	/**
	 * @param {{google?: number, amazon?: boolean, yahoo?: string}} values - values for this class fields
	 * @constructor
	*/
	function Companies({ google = 0, amazon = false, yahoo = "" }) {
		this.google = google
		this.amazon = amazon
		this.yahoo = yahoo
	};
	Companies.prototype = {
		/** @type {number} - google */
		google: 0,
		/** @type {boolean} - amazon */
		amazon: false,
		/** @type {string} - yahoo */
		yahoo: "",
		/**
		 * @returns {number}
		 * @function
		*/
		method() {
			const it = this;
			const ss = new Companies({
				google: 2,
				amazon: true,
				yahoo: "hello"
			});
			/** @type {[number, number]} */
			const [a, b] = hello(2, "google", "not google");
			/** @type {string} - glue */
			const glue = (a > 2 ? "more_glue" : a > 5 ? "more glueee" : "less glue");
			if (a !== 2) {
			}
			
			return 0;
		}
	};

	const POSITION = Object.freeze({
		go_back: 0,
		dont_go_back: 1,
	});
	
	/**
	 * @param {string} v_extends
	 * @param {number} v_instanceof
	 * @returns {void}
	 * @function
	*/
	function v_class(v_extends, v_instanceof) {
		/** @type {number} - v_delete */
		const v_delete = v_instanceof;
	}
	
	/* program entry point */
	(async function() {
		builtin.println("Hello from V.js!");
		/** @type {number} - a */
		let a = 1;
		a *= 2;
		a += 3;
		builtin.println(a);
		const b = new hl.A({});
		b.update("an update");
		builtin.println(b);
		const c = new Foo({
			a: new hl.A({})
		});
		c.a.update("another update");
		builtin.println(c);
		/** @type {string} - v */
		const v = "done";
		{
			/** @type {string} - _ */
			const _ = "block";
		}
		
		/** @type {number} - pos */
		const pos = POSITION.go_back;
		/** @type {string} - v_debugger */
		const v_debugger = "JS keywords";
		/** @type {string} - v_await */
		const v_await = _CONSTS.v_super + ": " + v_debugger;
		/** @type {string} - v_finally */
		let v_finally = "implemented";
		console.log(v_await, v_finally);
		/** @type {number} - dun */
		const dun = _CONSTS.i_am_a_const * 20;
		for (let i = 0; i < 10; i++) {
		}
		
		for (let i = 0; i < "hello".length; ++i) {
			let x = "hello"[i];
		}
		
		for (let x = 1; x < 10; ++x) {
		}
		
		/** @type {number[]} - arr */
		const arr = [1, 2, 3, 4, 5];
		for (let _tmp1 = 0; _tmp1 < arr.length; ++_tmp1) {
			let i = arr[_tmp1];
		}
		
		/** @type {Map<string, string>} - ma */
		const ma = new Map([
			["str", "done"],
			["ddo", "baba"]
		]);
		for (let [m, n] of ma) {
			/** @type {string} - iss */
			const iss = m;
		}
		
		await new Promise(function(resolve){
			async(0, "hello");
			resolve();
		});
		
		/** @type {(number: number) => void} - fn_in_var */
		const fn_in_var = function (number) {
			builtin.println(tos3(`number: ${number}`));
		};
		hl.v_debugger();
		anon_consumer(hl.excited(), function (message) {
			builtin.println(message);
		});
	})();
	
	/**
	 * @param {string} greeting
	 * @param {(message: string) => void} anon
	 * @returns {void}
	 * @function
	*/
	function anon_consumer(greeting, anon) {
		anon(greeting);
	}
	
	/**
	 * @param {number} num
	 * @param {string} def
	 * @returns {void}
	 * @function
	*/
	function async(num, def) {
	}
	
	/* [inline] */
	/* [deprecated] */
	/**
	 * @deprecated
	 * @param {number} game_on
	 * @param {...string} dummy
	 * @returns {[number, number]}
	 * @function
	*/
	function hello(game_on, ...dummy) {
		for (let _tmp2 = 0; _tmp2 < dummy.length; ++_tmp2) {
			let dd = dummy[_tmp2];
			/** @type {string} - l */
			const l = dd;
		}
		
		(function defer() {
			/** @type {string} - v_do */
			const v_do = "not";
		})();
		return [game_on + 2, 221];
	}

	/* module exports */
	return {};
})(hello);


