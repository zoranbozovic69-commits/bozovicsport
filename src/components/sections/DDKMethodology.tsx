import { TrendingDown, TrendingUp, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const chartData = [
  { session: 1, strah: 10, vestina: 1 },
  { session: 2, strah: 9, vestina: 2 },
  { session: 3, strah: 7, vestina: 3 },
  { session: 4, strah: 5, vestina: 4 },
  { session: 5, strah: 4, vestina: 5 },
  { session: 6, strah: 3, vestina: 6 },
  { session: 7, strah: 2, vestina: 7 },
  { session: 8, strah: 1.5, vestina: 8 },
  { session: 9, strah: 1.2, vestina: 8.5 },
  { session: 10, strah: 1, vestina: 9 },
];

const DDKMethodology = () => {
  return (
    <section className="py-20 bg-background" id="metodologija">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
              Mi ne nagađamo – <span className="text-primary">mi dokumentujemo.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              DDK Metodologija: Dijagnostika, Dokumentacija, Kontrola
            </p>
          </div>

          {/* Chart */}
          <Card className="mb-12 shadow-card border-0">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Tvoj napredak u 10 sesija</h3>
              <div className="h-[300px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="session" 
                      label={{ value: 'Časovi', position: 'insideBottom', offset: -5 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis 
                      domain={[0, 10]}
                      label={{ value: 'Nivo (1-10)', angle: -90, position: 'insideLeft' }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="strah" 
                      name="Strah" 
                      stroke="hsl(0, 70%, 55%)" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(0, 70%, 55%)', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="vestina" 
                      name="Veština" 
                      stroke="hsl(145, 65%, 42%)" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(145, 65%, 42%)', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Target outcomes */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">STRAH</h4>
                    <p className="text-muted-foreground text-sm">Cilj ciklusa od 10 časova</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-red-600">100%</span>
                  <Target className="w-6 h-6 text-muted-foreground" />
                  <span className="text-3xl font-black text-accent">10%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Potpuna kontrola panike</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">VEŠTINA</h4>
                    <p className="text-muted-foreground text-sm">Cilj ciklusa od 10 časova</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-muted-foreground">0%</span>
                  <Target className="w-6 h-6 text-muted-foreground" />
                  <span className="text-3xl font-black text-accent">90%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Bazična samostalnost u dubini</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDKMethodology;