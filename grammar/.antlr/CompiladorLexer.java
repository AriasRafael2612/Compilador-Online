// Generated from c:/Users/flore/Desktop/Proyecto Compilador/Nueva carpeta (3)/Trabajo/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CompiladorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ENT=1, LTR=2, DEC=3, PRINTF=4, MUL=5, DIV=6, ADD=7, SUB=8, INICIALIZACION=9, 
		ASIGNACION=10, LLAVE_I=11, LLAVE_F=12, ID=13, INT=14, CHAR=15, FLOAT=16, 
		SEMI=17, IPAREN=18, DPARENT=19, WS=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ENT", "LTR", "DEC", "PRINTF", "MUL", "DIV", "ADD", "SUB", "INICIALIZACION", 
			"ASIGNACION", "LLAVE_I", "LLAVE_F", "ID", "INT", "CHAR", "FLOAT", "SEMI", 
			"IPAREN", "DPARENT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'ent'", "'ltr'", "'dec'", "'resultado'", "'*'", "'/'", "'+'", 
			"'-'", "'inicializacion'", "'='", "'{'", "'}'", null, null, null, null, 
			"';'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ENT", "LTR", "DEC", "PRINTF", "MUL", "DIV", "ADD", "SUB", "INICIALIZACION", 
			"ASIGNACION", "LLAVE_I", "LLAVE_F", "ID", "INT", "CHAR", "FLOAT", "SEMI", 
			"IPAREN", "DPARENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CompiladorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Compilador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0014\u0083\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0004\f^\b\f\u000b\f\f\f_\u0001\r\u0004\rc\b\r\u000b"+
		"\r\f\rd\u0001\u000e\u0004\u000eh\b\u000e\u000b\u000e\f\u000ei\u0001\u000f"+
		"\u0004\u000fm\b\u000f\u000b\u000f\f\u000fn\u0001\u000f\u0001\u000f\u0004"+
		"\u000fs\b\u000f\u000b\u000f\f\u000ft\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013~\b\u0013"+
		"\u000b\u0013\f\u0013\u007f\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014\u0001\u0000\u0003\u0002"+
		"\u0000AZaz\u0001\u000009\u0003\u0000\t\n\r\r  \u0088\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0001)\u0001\u0000\u0000\u0000\u0003-\u0001\u0000"+
		"\u0000\u0000\u00051\u0001\u0000\u0000\u0000\u00075\u0001\u0000\u0000\u0000"+
		"\t?\u0001\u0000\u0000\u0000\u000bA\u0001\u0000\u0000\u0000\rC\u0001\u0000"+
		"\u0000\u0000\u000fE\u0001\u0000\u0000\u0000\u0011G\u0001\u0000\u0000\u0000"+
		"\u0013V\u0001\u0000\u0000\u0000\u0015X\u0001\u0000\u0000\u0000\u0017Z"+
		"\u0001\u0000\u0000\u0000\u0019]\u0001\u0000\u0000\u0000\u001bb\u0001\u0000"+
		"\u0000\u0000\u001dg\u0001\u0000\u0000\u0000\u001fl\u0001\u0000\u0000\u0000"+
		"!v\u0001\u0000\u0000\u0000#x\u0001\u0000\u0000\u0000%z\u0001\u0000\u0000"+
		"\u0000\'}\u0001\u0000\u0000\u0000)*\u0005e\u0000\u0000*+\u0005n\u0000"+
		"\u0000+,\u0005t\u0000\u0000,\u0002\u0001\u0000\u0000\u0000-.\u0005l\u0000"+
		"\u0000./\u0005t\u0000\u0000/0\u0005r\u0000\u00000\u0004\u0001\u0000\u0000"+
		"\u000012\u0005d\u0000\u000023\u0005e\u0000\u000034\u0005c\u0000\u0000"+
		"4\u0006\u0001\u0000\u0000\u000056\u0005r\u0000\u000067\u0005e\u0000\u0000"+
		"78\u0005s\u0000\u000089\u0005u\u0000\u00009:\u0005l\u0000\u0000:;\u0005"+
		"t\u0000\u0000;<\u0005a\u0000\u0000<=\u0005d\u0000\u0000=>\u0005o\u0000"+
		"\u0000>\b\u0001\u0000\u0000\u0000?@\u0005*\u0000\u0000@\n\u0001\u0000"+
		"\u0000\u0000AB\u0005/\u0000\u0000B\f\u0001\u0000\u0000\u0000CD\u0005+"+
		"\u0000\u0000D\u000e\u0001\u0000\u0000\u0000EF\u0005-\u0000\u0000F\u0010"+
		"\u0001\u0000\u0000\u0000GH\u0005i\u0000\u0000HI\u0005n\u0000\u0000IJ\u0005"+
		"i\u0000\u0000JK\u0005c\u0000\u0000KL\u0005i\u0000\u0000LM\u0005a\u0000"+
		"\u0000MN\u0005l\u0000\u0000NO\u0005i\u0000\u0000OP\u0005z\u0000\u0000"+
		"PQ\u0005a\u0000\u0000QR\u0005c\u0000\u0000RS\u0005i\u0000\u0000ST\u0005"+
		"o\u0000\u0000TU\u0005n\u0000\u0000U\u0012\u0001\u0000\u0000\u0000VW\u0005"+
		"=\u0000\u0000W\u0014\u0001\u0000\u0000\u0000XY\u0005{\u0000\u0000Y\u0016"+
		"\u0001\u0000\u0000\u0000Z[\u0005}\u0000\u0000[\u0018\u0001\u0000\u0000"+
		"\u0000\\^\u0007\u0000\u0000\u0000]\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`\u001a"+
		"\u0001\u0000\u0000\u0000ac\u0007\u0001\u0000\u0000ba\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000"+
		"\u0000\u0000e\u001c\u0001\u0000\u0000\u0000fh\u0007\u0000\u0000\u0000"+
		"gf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000"+
		"\u0000ij\u0001\u0000\u0000\u0000j\u001e\u0001\u0000\u0000\u0000km\u0007"+
		"\u0001\u0000\u0000lk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000"+
		"nl\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000op\u0001\u0000\u0000"+
		"\u0000pr\u0005.\u0000\u0000qs\u0007\u0001\u0000\u0000rq\u0001\u0000\u0000"+
		"\u0000st\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001\u0000"+
		"\u0000\u0000u \u0001\u0000\u0000\u0000vw\u0005;\u0000\u0000w\"\u0001\u0000"+
		"\u0000\u0000xy\u0005(\u0000\u0000y$\u0001\u0000\u0000\u0000z{\u0005)\u0000"+
		"\u0000{&\u0001\u0000\u0000\u0000|~\u0007\u0002\u0000\u0000}|\u0001\u0000"+
		"\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0006\u0013\u0000\u0000\u0082(\u0001\u0000\u0000\u0000\u0007"+
		"\u0000_dint\u007f\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}