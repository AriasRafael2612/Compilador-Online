// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,20,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,23,8,1,10,1,12,1,26,
9,1,1,2,1,2,1,2,1,2,3,2,32,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,3,5,50,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,
61,8,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,69,8,6,10,6,12,6,72,9,6,1,6,0,1,12,7,
0,2,4,6,8,10,12,0,2,1,0,5,6,1,0,7,8,78,0,14,1,0,0,0,2,24,1,0,0,0,4,27,1,
0,0,0,6,35,1,0,0,0,8,40,1,0,0,0,10,49,1,0,0,0,12,60,1,0,0,0,14,15,5,9,0,
0,15,16,5,11,0,0,16,17,3,2,1,0,17,18,5,12,0,0,18,1,1,0,0,0,19,23,3,4,2,0,
20,23,3,6,3,0,21,23,3,8,4,0,22,19,1,0,0,0,22,20,1,0,0,0,22,21,1,0,0,0,23,
26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,24,1,0,0,0,27,28,
3,10,5,0,28,31,5,13,0,0,29,30,5,10,0,0,30,32,3,12,6,0,31,29,1,0,0,0,31,32,
1,0,0,0,32,33,1,0,0,0,33,34,5,17,0,0,34,5,1,0,0,0,35,36,5,13,0,0,36,37,5,
10,0,0,37,38,3,12,6,0,38,39,5,17,0,0,39,7,1,0,0,0,40,41,5,4,0,0,41,42,5,
18,0,0,42,43,3,12,6,0,43,44,5,19,0,0,44,45,5,17,0,0,45,9,1,0,0,0,46,50,5,
1,0,0,47,50,5,2,0,0,48,50,5,3,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,
0,0,50,11,1,0,0,0,51,52,6,6,-1,0,52,61,5,14,0,0,53,61,5,16,0,0,54,61,5,15,
0,0,55,61,5,13,0,0,56,57,5,18,0,0,57,58,3,12,6,0,58,59,5,19,0,0,59,61,1,
0,0,0,60,51,1,0,0,0,60,53,1,0,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,
0,0,61,70,1,0,0,0,62,63,10,7,0,0,63,64,7,0,0,0,64,69,3,12,6,8,65,66,10,6,
0,0,66,67,7,1,0,0,67,69,3,12,6,7,68,62,1,0,0,0,68,65,1,0,0,0,69,72,1,0,0,
0,70,68,1,0,0,0,70,71,1,0,0,0,71,13,1,0,0,0,72,70,1,0,0,0,7,22,24,31,49,
60,68,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'ent'", "'ltr'", "'dec'", "'resultado'", 
                            "'*'", "'/'", "'+'", "'-'", "'inicializacion'", 
                            "'='", "'{'", "'}'", null, null, null, null, 
                            "';'", "'('", "')'" ];
    static symbolicNames = [ null, "ENT", "LTR", "DEC", "PRINTF", "MUL", 
                             "DIV", "ADD", "SUB", "INICIALIZACION", "ASIGNACION", 
                             "LLAVE_I", "LLAVE_F", "ID", "INT", "CHAR", 
                             "FLOAT", "SEMI", "IPAREN", "DPARENT", "WS" ];
    static ruleNames = [ "start", "contenido", "declaracion", "asignacion", 
                         "imprimir", "pr", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.valor_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    valor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(CompiladorParser.INICIALIZACION);
	        this.state = 15;
	        this.match(CompiladorParser.LLAVE_I);
	        this.state = 16;
	        this.contenido();
	        this.state = 17;
	        this.match(CompiladorParser.LLAVE_F);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CompiladorParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8222) !== 0)) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	                this.state = 19;
	                this.declaracion();
	                break;
	            case 13:
	                this.state = 20;
	                this.asignacion();
	                break;
	            case 4:
	                this.state = 21;
	                this.imprimir();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompiladorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.pr();
	        this.state = 28;
	        this.match(CompiladorParser.ID);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 29;
	            this.match(CompiladorParser.ASIGNACION);
	            this.state = 30;
	            this.valor(0);
	        }

	        this.state = 33;
	        this.match(CompiladorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompiladorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(CompiladorParser.ID);
	        this.state = 36;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 37;
	        this.valor(0);
	        this.state = 38;
	        this.match(CompiladorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompiladorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(CompiladorParser.PRINTF);
	        this.state = 41;
	        this.match(CompiladorParser.IPAREN);
	        this.state = 42;
	        this.valor(0);
	        this.state = 43;
	        this.match(CompiladorParser.DPARENT);
	        this.state = 44;
	        this.match(CompiladorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pr() {
	    let localctx = new PrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompiladorParser.RULE_pr);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new EnteroContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(CompiladorParser.ENT);
	            break;
	        case 2:
	            localctx = new LetraContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(CompiladorParser.LTR);
	            break;
	        case 3:
	            localctx = new DecimalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.match(CompiladorParser.DEC);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	valor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 52;
	            this.match(CompiladorParser.INT);
	            break;
	        case 16:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(CompiladorParser.FLOAT);
	            break;
	        case 15:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(CompiladorParser.CHAR);
	            break;
	        case 13:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            this.match(CompiladorParser.ID);
	            break;
	        case 18:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.match(CompiladorParser.IPAREN);
	            this.state = 57;
	            this.valor(0);
	            this.state = 58;
	            this.match(CompiladorParser.DPARENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 68;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 62;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 63;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 64;
	                    this.valor(8);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 65;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 66;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 67;
	                    this.valor(7);
	                    break;

	                } 
	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.ENT = 1;
CompiladorParser.LTR = 2;
CompiladorParser.DEC = 3;
CompiladorParser.PRINTF = 4;
CompiladorParser.MUL = 5;
CompiladorParser.DIV = 6;
CompiladorParser.ADD = 7;
CompiladorParser.SUB = 8;
CompiladorParser.INICIALIZACION = 9;
CompiladorParser.ASIGNACION = 10;
CompiladorParser.LLAVE_I = 11;
CompiladorParser.LLAVE_F = 12;
CompiladorParser.ID = 13;
CompiladorParser.INT = 14;
CompiladorParser.CHAR = 15;
CompiladorParser.FLOAT = 16;
CompiladorParser.SEMI = 17;
CompiladorParser.IPAREN = 18;
CompiladorParser.DPARENT = 19;
CompiladorParser.WS = 20;

CompiladorParser.RULE_start = 0;
CompiladorParser.RULE_contenido = 1;
CompiladorParser.RULE_declaracion = 2;
CompiladorParser.RULE_asignacion = 3;
CompiladorParser.RULE_imprimir = 4;
CompiladorParser.RULE_pr = 5;
CompiladorParser.RULE_valor = 6;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_start;
    }

	INICIALIZACION() {
	    return this.getToken(CompiladorParser.INICIALIZACION, 0);
	};

	LLAVE_I() {
	    return this.getToken(CompiladorParser.LLAVE_I, 0);
	};

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	LLAVE_F() {
	    return this.getToken(CompiladorParser.LLAVE_F, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContenidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_contenido;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	imprimir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImprimirContext);
	    } else {
	        return this.getTypedRuleContext(ImprimirContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitContenido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_declaracion;
    }

	pr() {
	    return this.getTypedRuleContext(PrContext,0);
	};

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	ASIGNACION() {
	    return this.getToken(CompiladorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(CompiladorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_imprimir;
    }

	PRINTF() {
	    return this.getToken(CompiladorParser.PRINTF, 0);
	};

	IPAREN() {
	    return this.getToken(CompiladorParser.IPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	DPARENT() {
	    return this.getToken(CompiladorParser.DPARENT, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_pr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EnteroContext extends PrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENT() {
	    return this.getToken(CompiladorParser.ENT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitEntero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.EnteroContext = EnteroContext;

class LetraContext extends PrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LTR() {
	    return this.getToken(CompiladorParser.LTR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitLetra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.LetraContext = LetraContext;

class DecimalContext extends PrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(CompiladorParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.DecimalContext = DecimalContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IPAREN() {
	    return this.getToken(CompiladorParser.IPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	DPARENT() {
	    return this.getToken(CompiladorParser.DPARENT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ParensContext = ParensContext;

class MulDivContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CompiladorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CompiladorParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.MulDivContext = MulDivContext;

class AddSubContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CompiladorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CompiladorParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AddSubContext = AddSubContext;

class CharContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(CompiladorParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CharContext = CharContext;

class IdContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IdContext = IdContext;

class FloatContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CompiladorParser.FLOAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.FloatContext = FloatContext;

class IntContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CompiladorParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IntContext = IntContext;


CompiladorParser.StartContext = StartContext; 
CompiladorParser.ContenidoContext = ContenidoContext; 
CompiladorParser.DeclaracionContext = DeclaracionContext; 
CompiladorParser.AsignacionContext = AsignacionContext; 
CompiladorParser.ImprimirContext = ImprimirContext; 
CompiladorParser.PrContext = PrContext; 
CompiladorParser.ValorContext = ValorContext; 
