import { eigs, log, multiply, ones, zeros } from 'mathjs'

export default function calcENA(matrix) {

    var N = matrix.length - 1;

        //Links(L)
        var L = 0;
        try {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    if (matrix[i][j] > 0) {
                        L++;
                        console.log("tester");
                    }
                }
            }
        } catch (error) {
            console.log("Link error");
        }
        

        //n_prey
        var n_prey = 0.0;
        try {
            for (let i = 0; i < N; i++) {
                var prey_indiv_sum = 0.0;
                for (let j = 0; j < N; j++) {
                    prey_indiv_sum += matrix[i][j];
                }
    
                if (prey_indiv_sum > 0) {
                    n_prey++;
                }
    
            }
        } catch (error) {
            console.log("n_prey error");
        }
        

        //n_predators
        var n_predators = 0.0;
        try {
            for (let j = 0; j < N; j++) {
                var pred_indiv_sum = 0.0;
                for (let i = 0; i < N; i++) {
                    pred_indiv_sum += matrix[i][j];
                }
    
                if (pred_indiv_sum > 0) {
                    n_predators++;
                }
    
            }
        } catch (error) {
            console.log("n_predators error");
        }
        

        //Prey-Predator Ratio (Pr)
        var Pr = 0.0;
        try {
            Pr = n_prey / n_predators;
        } catch (error) {
            console.log("Prey-Predator Ratio error");
        }
        

        //Generalization (G)
        var G = 0.0;
        try {
            G = L / n_predators;
        } catch (error) {
            console.log("Generalization error");
        }

        //Vulnerability (V)
        var V = 0.0;
        try {
            V = L / n_prey;
        } catch (error) {
            console.log("Vulnerability error");
        }

        //Linkage Density (Ld)
        var Ld = 0.0;
        try {
            Ld = L / N;
        } catch (error) {
            console.log("Linkage Density error");
        }

        //Connectance (C)
        var C = 0.0;
        try {
            C = L / (N ** 2);
        } catch (error) {
            console.log("Connectance error");
        }

        //Fraction of Special Predators (Ps) 
        var Ps = 0.0;

        try {
            var n_S_predators = 0.0;
            for (let j = 0; j < N; j++) {
                var pred_indiv_sum = 0.0;
                for (let i = 0; i < N; i++) {
                    pred_indiv_sum += matrix[i][j];
                }

                if (pred_indiv_sum == 1) {
                    n_S_predators++;
                }
            }

            Ps = n_S_predators / n_predators;
        } catch (error) {
            console.log("Fraction of Special Predators error");
        }
        

        //Cyclicity (lambda_max)
        var lambda_max = 0.0;

        try {
            var eig_values = eigs(matrix);
            lambda_max = eig_values[0];
            for (var k = 0; k < eig_values.length; k++) {
                if (eig_values[k] > lambda_max) {
                    lambda_max = eig_values;
                }
            }
        } catch (error) {
            console.log("Cyclicity error");
        }

        console.log('CYCLICITY')
        console.log(lambda_max)
        

        //Total System Throughout (TSTp)
        var TSTp = 0.0;

        try {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    TSTp += matrix[i][j];
                }
            }
        } catch (error) {
            console.log("Total System Throughout error");
        }

        console.log('TSTp')
        console.log(TSTp)
        

        //Shannon's Index (H)
        var H = 0.0;

        try {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    var calc_temp = matrix[i][j] / TSTp;
                    H += (calc_temp) * log(calc_temp, 2);
                    console.log('matrixij')
                    console.log(matrix[i][j])
                    console.log(calc_temp)
                }
            }
    
            H *= -1;    //-k factor ---- k=1
        } catch (error) {
            console.log("Shannon's Index error");
        }
        

        //Average Mutual Information (AMI)
        var AMI = 0.0;

        try {
            var p1 = zeros([N, 1]);
            var p2 = zeros([1, N]);
            for (let k1 = 0; k1 < N; k1++) {
                for (let k2 = 0; k2 < N; k2++) {
                    p1[k1] += matrix[k1][k2];
                    p2[0][k1] += matrix[k2][k1];
                }
            }
            var denom = multiply(p1, p2);

            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    var calc_temp1 = matrix[i][j] / TSTp;
                    var calc_temp2 = (matrix[i][j] * TSTp) / denom;

                    AMI += (calc_temp1) * log(calc_temp2, 2);
                }
            }

            AMI *= -1;    //-k factor ---- k=1
        } catch (error) {
            console.log("Average Mutual Information error");
        }
        

        //System Ascendency (ASC)
        var ASC = 0.0;
        try {
            ASC = AMI * TSTp;
        } catch (error) {
            console.log("System Ascendency error");
        }
        

        //Development Capacity (DC)
        var DC = 0.0;
        try {
            var inner = zeros([N, 1]);
            for (let k1 = 0; k1 < N; k1++) {
                for (let k2 = 0; k2 < N; k2++) {
                    inner[k1] += matrix[k1][k2];
                }
            }
            var temp = multiply(inner, log(inner, 2));
            for (let i = 0; i < N; i++) {
                DC += temp[i];
            }

            DC *= -1;
        } catch (error) {
            console.log("Development Capacity error");
        }
        

        //Overhead (phi)
        var phi = 0.0;
        try {
            phi = DC - ASC;
        } catch (error) {
            console.log("Overhead error");
        }
        

        //Alpha (alpha)
        var alpha = 0.0;
        try {
            alpha = ASC / DC;
        } catch (error) {
            console.log("Alpha error");
        }

        //Cycling Index / Finn Cycling Index (CI)
        var CI = 0.0;
        try {
            var TSTc = 0.0;
            for (let j = 0; j < N; j++) {
                var Tj = 0.0;
                for (let i = 0; i < N; i++) {
                    Tj += matrix[i][j];
                }

                TSTc += ((matrix[j][j] - 1) / (matrix[j][j])) * Tj;
            }

            CI = TSTc / TSTp;
        } catch (error) {
            console.log("Cycling Index error");
        }
        

        //Mean Path Length / Average Path Length (MPL)
        var MPL = 0.0;
        try {
            var t_0j = 0.0;
            for (let j = 0; j < N; j++) {
                t_0j += matrix[0][j];
            }
            MPL = TSTp / t_0j;
        } catch (error) {
            console.log("Mean Path Length error");
        }
        

        //Robustness (R)
        var R = 0.0;
        try {
            var ratio = ASC / DC;
            R = -1 * (ratio) * log(ratio, 2);   //-1 = -k
        } catch (error) {
            console.log("Robustness error");
        }
        


        /*
        var metric1 = 0.0;
        var metric2 = 0.0;
        var metric3 = 0.0;

        for (let i = 0; i < N; i++) {
            metric1 += matrix[i][0];
            metric2 += matrix[i][1];
            metric3 += matrix[i][2];
        }
        */

        return ([L, n_prey, n_predators, Pr, G, V, Ld, C, Ps, lambda_max, TSTp, H, AMI, ASC, DC, phi, alpha, CI, MPL, R])

}
