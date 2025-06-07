import '@testing-library/jest-dom';
import 'isomorphic-fetch'; // Optional
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
